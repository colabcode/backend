describe(".env", () => {
  beforeEach(() => {
    jest.mock("dotenv");
  });

  test("dev mode", () => {
    process.env.NODE_ENV = "development";
    const config = require("./index").default;
    const dotenv = require("dotenv");

    expect(config.env.dev).toBe(true);
    expect(config.env.prod).toBe(false);
    expect(dotenv.config).toHaveBeenCalledTimes(1);
  });
});
