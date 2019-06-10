exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("snippets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("snippets").insert([
        {
          id: "bb3112b6-e63a-4d53-b324-01e44aa01d85",
          type: "js",
          author: "vzhufk",
          value: `
                    console.log(1);
                 `
        },
        {
          id: "e58d8a33-eef8-492b-8626-9a99fec53f9c",
          type: "js",
          author: "vzhufk",
          value: `
                    console.log(1 + "sad");
                 `
        },
        {
          id: "ee284dfc-fe9e-41e5-abba-21a5a681b2d4",
          type: "js",
          author: "vzhufk",
          value: `
                    let a = 1;
                    console.log(a + 1);
                 `
        }
      ]);
    });
};
