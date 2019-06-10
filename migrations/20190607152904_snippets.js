exports.up = function(knex, Promise) {
  return knex.schema.createTable("snippets", table => {
    table
      .uuid("id")
      .primary()
      .unique();
    table.string("author").notNullable();
    table.text("value");
    table.enu("type", ["js"]).defaultTo("js");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("snippets");
};
