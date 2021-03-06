import { RequestError } from "@octokit/request-error";

import { isSmsTriggeringRoute } from "./is-sms-triggering-route";
import { State, EndpointOptions, RequestInterface, AnyResponse } from "./types";

export async function requestWith2Fa(
  state: State,
  options: EndpointOptions,
  customRequest?: RequestInterface
): Promise<AnyResponse> {
  const request = customRequest || state.request;

  try {
    if (state.totp) {
      options = Object.assign({}, options, {
        headers: Object.assign({}, options.headers, {
          "x-github-otp": state.totp,
        }),
      });
    }

    const response = await request(options);
    return response;
  } catch (error) {
    if (!error.headers) throw error;

    const totpRequired = /required/.test(error.headers["x-github-otp"] || "");
    const hasSmsDelivery = /sms/.test(error.headers["x-github-otp"] || "");

    // handle "2FA required" error only
    if (error.status !== 401 || !totpRequired) {
      throw error;
    }

    if (
      error.status === 401 &&
      totpRequired &&
      error.request.headers["x-github-otp"]
    ) {
      if (state.totp) {
        // TOTP is no longer valid, request again
        delete state.totp;
      } else {
        throw new RequestError(
          "Invalid TOTP (time-based one-time password) for two-factor authentication",
          401,
          {
            headers: error.headers,
            request: error.request,
          }
        );
      }
    }

    // If user has 2Fa with SMS configured, send a bogus "PATCH /authorizations"
    // request to trigger the TOTP delivery via SMS, unless the current request
    // already triggered a delivery
    if (hasSmsDelivery && !isSmsTriggeringRoute(options)) {
      try {
        await request("PATCH /authorizations", {
          headers: options.headers,
        });
      } catch (error) {
        // we expect a 401
        if (error.status !== 401) throw error;
      }
    }

    // we set state.totp after the request to make sure that it's valid
    const totp = await state.strategyOptions.on2Fa();

    try {
      const response = await requestWith2Fa(
        state,
        Object.assign({}, options, {
          headers: Object.assign({}, options.headers, {
            "x-github-otp": totp,
          }),
        }),
        customRequest
      );

      state.totp = totp;
      return response;
    } catch (error) {
      // error without a headers property is an unexpected error
      // which we don???t cover with tests
      /* istanbul ignore next */
      if (!error.headers) throw error;

      const totpRequired = /required/.test(error.headers["x-github-otp"] || "");

      // unless the error is an invalid TOTP, we can cache it
      if (!totpRequired) {
        state.totp = totp;
      }

      throw error;
    }
  }
}
