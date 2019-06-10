import implementation from "../onListen";
import http from "http";
jest.mock("../../../log");
import log from "../../../log";

describe("http server event onListen", () => {
  const server = http.createServer();
  const run = implementation(server);

  test("init", () => {
    const it = implementation(server);
    expect(it).toBeInstanceOf(Function);
  });

  test("port", () => {
    server.address = jest.fn().mockReturnValue({ port: 0 });
    run();
    expect(log.info).toBeCalled();
  });

  test("pipe", () => {
    server.address = jest.fn().mockReturnValue("0");
    run();
    expect(log.info).toBeCalled();
  });
});
