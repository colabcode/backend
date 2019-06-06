declare module "github-auth" {
  export interface GitHubAuth {
    login: Function;
    authenticate: Function;
  }

  export default function(
    appId: string,
    appSecret: string,
    config: any
  ): GitHubAuth;
}
