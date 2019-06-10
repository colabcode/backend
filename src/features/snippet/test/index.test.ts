import Snippet from "../model";
import resovler from "../resolve";

describe("snippet", () => {
  describe("objection model", () => {
    test("table name", () => {
      return expect(Snippet.tableName).toBe("snippets");
    });

    test("table id", () => {
      return expect(Snippet.idColumn).toBe("id");
    });
  });

  describe("resovler", () => {
    beforeEach(() => {
      const findById = jest.fn().mockImplementation(v => v);
      const query = jest.fn().mockReturnValue({
        findById
      });
      Snippet.query = query;
    });

    test("one", async () => {
      const id = "uuid";
      const result = await resovler.get.one({}, { id }, {});
      expect(Snippet.query).toHaveBeenCalledTimes(1);
      expect(result).toBe(id);
    });

    test("all", async () => {
      await resovler.get.all({}, {}, {});
      expect(Snippet.query).toHaveBeenCalledTimes(1);
    });
  });
});
