import githubAuth from "./services/github";

export default (app: any) => {
  app.route("/login").get(githubAuth.login);
};
