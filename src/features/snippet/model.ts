import { Model } from "objection";
import type from "./type";
import resolve from "./resolve";
import database from "../../database";

Model.knex(database);

export default class Snippet extends Model {
  static get tableName() {
    return "snippets";
  }

  static get idColumn() {
    return "id";
  }

  static get type() {
    return type;
  }

  static get resolve() {
    return resolve;
  }
}
