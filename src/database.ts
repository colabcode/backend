import knexfile from "../knexfile";
import objection from "objection";
import Knex from "knex";

const knex = Knex(knexfile);

objection.Model.knex(knex);

export default knex;
