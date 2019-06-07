import Snippet from "../model";

describe("snippet", () => {
  describe("objection model", () => {
    test("table name", () => {
      return expect(Snippet.tableName).toBe("snippets");
    });

    test("table id", () => {
      return expect(Snippet.idColumn).toBe("id");
    });
  });
});
