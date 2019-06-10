import type from "./type";
import resolve from "./resolve";
import model from "./model";

export default class SnippetEntity {
  static get model() {
    return model;
  }

  static get type() {
    return type;
  }

  static get resolve() {
    return resolve;
  }
}
