import http from "http";
import implementation from "../onError";
jest.mock("../../../log");
import log from "../../../log";

describe("http server event onError", () => {
  const server = http.createServer();
  const run = implementation(server);
  log.error = jest.fn().mockImplementation(v => v);

  test("init", () => {
    expect(it).toBeInstanceOf(Function);
  });

  test("general error", () => {
    const error: NodeJS.ErrnoException = {
      name: "General Error",
      message: "Bruh, something wrong.",
      code: "GENRL"
    };

    expect(() => run(error)).toThrow(error);
  });

  test("perm error", () => {
    const error: NodeJS.ErrnoException = {
      name: "Perm Error",
      message: "Bruh, something wrong with perms.",
      code: "EACCES"
    };

    expect(() => run(error)).toThrow(error);
    expect(log.error).toHaveBeenCalled();
  });

  test("port error", () => {
    const error: NodeJS.ErrnoException = {
      name: "Port Error",
      message: "Bruh, something wrong with port you assigned.",
      code: "EADDRINUSE"
    };

    expect(() => run(error)).toThrow(error);
    expect(log.error).toHaveBeenCalled();
  });
});
