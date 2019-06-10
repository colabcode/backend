import on from "../index";
import http from "http";

describe("http server events", () => {
  beforeAll(() => {});
  test("listeners", () => {
    const server = http.createServer();
    server.on = jest.fn();

    on(server);

    expect(server.on).toHaveBeenCalledTimes(2);
  });
});
