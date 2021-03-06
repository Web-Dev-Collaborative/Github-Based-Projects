import { Octokit } from "@octokit/core";
import { App } from "./index";
import { EachInstallationFunction, EachInstallationInterface } from "./types";
export declare function eachInstallationFactory(
  app: App
): EachInstallationInterface<Octokit>;
export declare function eachInstallation(
  app: App,
  callback: EachInstallationFunction<Octokit>
): Promise<void>;
export declare function eachInstallationIterator(app: App): {
  [Symbol.asyncIterator](): AsyncGenerator<
    {
      octokit: Octokit;
      installation: {
        id: number;
        account:
          | (Partial<{
              name?: string | null | undefined;
              email?: string | null | undefined;
              login: string;
              id: number;
              node_id: string;
              avatar_url: string;
              gravatar_id: string | null;
              url: string;
              html_url: string;
              followers_url: string;
              following_url: string;
              gists_url: string;
              starred_url: string;
              subscriptions_url: string;
              organizations_url: string;
              repos_url: string;
              events_url: string;
              received_events_url: string;
              type: string;
              site_admin: boolean;
              starred_at?: string | undefined;
            }> &
              Partial<{
                description?: string | null | undefined;
                html_url: string;
                website_url?: string | null | undefined;
                id: number;
                node_id: string;
                name: string;
                slug: string;
                created_at: string | null;
                updated_at: string | null;
                avatar_url: string;
              }>)
          | null;
        repository_selection: "all" | "selected";
        access_tokens_url: string;
        repositories_url: string;
        html_url: string;
        app_id: number;
        target_id: number;
        target_type: string;
        permissions: {
          actions?: "read" | "write" | undefined;
          administration?: "read" | "write" | undefined;
          checks?: "read" | "write" | undefined;
          content_references?: "read" | "write" | undefined;
          contents?: "read" | "write" | undefined;
          deployments?: "read" | "write" | undefined;
          environments?: "read" | "write" | undefined;
          issues?: "read" | "write" | undefined;
          metadata?: "read" | "write" | undefined;
          packages?: "read" | "write" | undefined;
          pages?: "read" | "write" | undefined;
          pull_requests?: "read" | "write" | undefined;
          repository_hooks?: "read" | "write" | undefined;
          repository_projects?: "read" | "write" | "admin" | undefined;
          secret_scanning_alerts?: "read" | "write" | undefined;
          secrets?: "read" | "write" | undefined;
          security_events?: "read" | "write" | undefined;
          single_file?: "read" | "write" | undefined;
          statuses?: "read" | "write" | undefined;
          vulnerability_alerts?: "read" | undefined;
          workflows?: "write" | undefined;
          members?: "read" | "write" | undefined;
          organization_administration?: "read" | "write" | undefined;
          organization_hooks?: "read" | "write" | undefined;
          organization_plan?: "read" | undefined;
          organization_projects?: "read" | "write" | "admin" | undefined;
          organization_packages?: "read" | "write" | undefined;
          organization_secrets?: "read" | "write" | undefined;
          organization_self_hosted_runners?: "read" | "write" | undefined;
          organization_user_blocking?: "read" | "write" | undefined;
          team_discussions?: "read" | "write" | undefined;
        };
        events: string[];
        created_at: string;
        updated_at: string;
        single_file_name: string | null;
        has_multiple_single_files?: boolean | undefined;
        single_file_paths?: string[] | undefined;
        app_slug: string;
        suspended_by: {
          name?: string | null | undefined;
          email?: string | null | undefined;
          login: string;
          id: number;
          node_id: string;
          avatar_url: string;
          gravatar_id: string | null;
          url: string;
          html_url: string;
          followers_url: string;
          following_url: string;
          gists_url: string;
          starred_url: string;
          subscriptions_url: string;
          organizations_url: string;
          repos_url: string;
          events_url: string;
          received_events_url: string;
          type: string;
          site_admin: boolean;
          starred_at?: string | undefined;
        } | null;
        suspended_at: string | null;
        contact_email?: string | null | undefined;
      };
    },
    void,
    unknown
  >;
};
