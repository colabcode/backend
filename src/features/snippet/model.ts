import { Model } from "objection";
import type from "./type";
import resolve from "./resolve";
import database from "../../database";

Model.knex(database);

export default class SnippetModel extends Model {
  static get tableName() {
    return "snippets";
  }

  static get idColumn() {
    return "id";
  }
}
