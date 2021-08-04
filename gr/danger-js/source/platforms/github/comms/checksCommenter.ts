import { GitHubAPI } from "../GitHubAPI"
import { DangerResults, isEmptyResults, isMarkdownOnlyResults } from "../../../dsl/DangerResults"
import { ExecutorOptions } from "../../../runner/Executor"
import { resultsToCheck } from "./checks/resultsToCheck"
import { getAccessTokenForInstallation } from "./checks/githubAppSupport"
import { debug } from "../../../debug"
import { sentence } from "../../../runner/DangerUtils"

const d = debug("GitHub::Checks")

export const getAuthWhenUsingDangerJSApp = () => {
  const appID = "12316"
  const key =
    "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEA00hv5YqXgqv2A60eo7+fQtwRYjN5BYu3Xgm0L3s5FZdup7pF\nL0oHruUwsDi6Z6MKgyKgnKBZKUXoUgqrMdhbka9rLfGtGp35SBjp+xgXNUKuwwks\ng0tIoLkPzDF2OiG3UB+vPWOBRqdMtA5dZTPZkz5xfBWivJBacVqcuf6j0nwRgv9q\npypIPWnmNZ2/y6jQfXnRubi7k72XSpazTmYx+2EoeMwkpGV+jPy/vd8ODr/n+5wI\nLAQd+24VEn7ixTW8WU9RUVA2a+kCoyGMpp+Zof9YdJmGE9cn23EAr8usDXvWG/3h\nRJ8tSqV/EyLgMRDk+ACMBu7WU4gKXXqkmjCbQwIDAQABAoIBAEDTXOHE4C/LqzP9\njgUX6jmNZBgJSvyUnbJQr+RRnnYtfFoiINAdmrXixEmNXkQmFjeeDEGCQVkUhe+G\nLnigtZfBhtUV7dLY3X9thXzxK03AI/bbfbjbBHGr1lkEZA36AlCnKBFh0mxnMHWe\nYrGGcx9mbVNxH/lTISzebG/03TbbI5y5tcaINoLs//M4KTS/boEBHBG+nTiKpMo+\n39P+LRui9mNYyCYxZJDgrpUOIvyyHhNYPHTlOamzesgIsD59/OIxmMT0xu9EZuZe\nY4mbnU1tgBmZNFSDih/R6m3TsFB6PA2hjkHbiHVa6q/+Nshq9P/2pZJzz2R0aMJT\njLoTlqECgYEA6bwIU0xKIMzvaZuEkkaIn4vT0uPr6bSZz1LXQWXkOV76SBL36z8T\np7Q5yOBy1cd6m6fevaOHg2o16XVyIJtUOrSI4WzGaKvcjbL0jpwHJSrS79XY4YmS\neZrVZkyNwmCUY9NG3Y3F1yJQwO0BeUw9Dllr23p/4rhnIEjovL1XN3cCgYEA52jj\nz0sDOmT5wzttZwC2bfJQu7sHwNKQIfDgkht1RtwOpg8qSzuKouzcbwacpiN006rK\nr9wIg1vv89tWfout7WYODQPJXAi6ImeHDe4WnCx7Uq7UBUaXMk8e9gFJPec7UCp+\n8o9b+wqZSYtoqV5P+bh0iVKDmojmYtbyXqZoBZUCgYB3IyXnN4KtV2hNHz0ixhsL\nn903qH9uX2Tq/WHE7ue2qofORwThfwRIvh+aGXXPK99+CcIKTZlcTb3vIrMqlaII\nTk9a//PeFIPWIjpvmm417q8YGpty0om7vEU74Jd9VXctrtp3QbVvJAmfXO8cYdTZ\nRJEqjTU0XiQKm78tvSEAnwKBgDeDmDMggbO+iZRma0Zsi1cw7GE86w089krOKHGk\nmKvZGsKHnNPTgty3CeKwqV/J3brxnBI4LOqmYZgUpFlTVPRAqVpB8Epd5ZlfUKzs\n0wvAOA2L1100pAzzoi/N+y4YjMgcibvS3HQLBN75zK/k6ja0I3DWFLA761kGy7od\nHZNJAoGAAifMxN9QvRzbkyeqoXvKjZB7CLQdiBIMw7/sZSY6gZWrdDkaKwRIgWdD\nfJP+6fi4oAGuOOiB1oHPMgu4WS6Bb1GnJUgEV0iIGTJImEUTzMlkek189JjXMnL2\nOzjqWcWNngSrmpPu6fHuQswzluYuJgU+RnC1vS/y0J00wE4aZgs=\n-----END RSA PRIVATE KEY-----\n"
  const installID = process.env.DANGER_JS_APP_INSTALL_ID

  return {
    appID,
    key,
    installID,
  }
}

export const getCustomAppAuthFromEnv = () => {
  const appID = process.env.DANGER_GITHUB_APP_ID || process.env.PERIL_INTEGRATION_ID
  const key = process.env.DANGER_GITHUB_APP_PRIVATE_SIGNING_KEY || process.env.PRIVATE_GITHUB_SIGNING_KEY
  const installID = process.env.DANGER_GITHUB_APP_INSTALL_ID || process.env.PERIL_ORG_INSTALLATION_ID

  return {
    appID,
    key,
    installID,
  }
}

const canUseChecks = (token: string | undefined) => {
  // An access token for an app looks like: v1.a06e8953d69edf05f06d61ab016ee80ab4b088ca
  if (token && token.startsWith("v1.")) {
    return true
  }
  // Are you using a custom GH app manually?
  const custom = getCustomAppAuthFromEnv()
  if (custom.appID && custom.key && custom.installID) {
    return true
  }
  // Are you using the Danger JS app?
  const dangerApp = getAuthWhenUsingDangerJSApp()
  if (dangerApp.appID && dangerApp.key && dangerApp.installID) {
    return true
  }

  d("Not using the checks API for GitHub")
  return false
}

/**
 * An object whose responsibility is to handle commenting on an issue
 * @param api
 */
export const GitHubChecksCommenter = (api: GitHubAPI) => {
  if (!canUseChecks(api.token)) {
    return undefined
  }

  return {
    platformResultsPreMapper: async (
      results: DangerResults,
      options: ExecutorOptions,
      ciCommitHash?: string
    ): Promise<DangerResults> => {
      // Does nothing if you disable checks support
      if (options.disableGitHubChecksSupport) {
        return results
      }

      let token = api.token
      // Either it doesn't exist, or is a personal access token
      if (!token || !token.startsWith("v1.")) {
        const custom = process.env.DANGER_JS_APP_INSTALL_ID ? getAuthWhenUsingDangerJSApp() : getCustomAppAuthFromEnv()
        token = await getAccessTokenForInstallation(custom.appID!, parseInt(custom.installID!), custom.key!)
        d("Created a custom access token: ", [custom.appID!, parseInt(custom.installID!), custom.key!, token])
      }

      let returnedResults = results
      d("Getting PR details for checks")
      const pr = await api.getPullRequestInfo()
      const checkData = await resultsToCheck(results, options, pr, api.getExternalAPI(), ciCommitHash)
      try {
        // If Danger succeeds at creating a checks API call, then we switch out
        // the results which go through to the issue commenter with a summary version.
        const response = await api.postCheckRun(checkData, token!)
        returnedResults = tweetSizedResultsFromResults(results, response)
        d("Got response on the checks API")
        d(JSON.stringify(response))
      } catch (error) {
        d("Check Creation failed with:")
        d(JSON.stringify(error))
      }

      return returnedResults
    },
  }
}

export const tweetSizedResultsFromResults = (results: DangerResults, checksResponse: any): DangerResults => {
  const allowMarkdowns = isMarkdownOnlyResults(results)
  const isEmpty = isEmptyResults(results)

  if (allowMarkdowns || isEmpty) {
    return results
  }

  return {
    warnings: [],
    messages: [],
    fails: [],
    markdowns: [
      {
        message:
          "Danger run resulted in " +
          messageFromResults(results) +
          `; to find out more, see the [checks page](${checksResponse.html_url}).`,
      },
    ],
  }
}

const messageFromResults = (results: DangerResults): string => {
  const appendS = (arr: any[]) => (arr.length === 1 ? "" : "s")
  const makeString = (name: string, arr: any[]) =>
    arr.length ? `${arr.length} ${name.substring(0, name.length - 1)}${appendS(arr)}` : null

  const newMessageComponents = Object.keys(results)
    .map(key => makeString(key, results[key]))
    .filter(Boolean) as any[]

  return sentence(newMessageComponents)
}
