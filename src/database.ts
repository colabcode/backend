import knexfile from "../knexfile";
import Knex from "knex";

const knex = Knex(knexfile);

export default knex;
