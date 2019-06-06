import GitHubAuth from "github-auth";
import config from "../../../config";

const value = GitHubAuth(config.github.appId, config.github.appSecret, {});

export default value;
