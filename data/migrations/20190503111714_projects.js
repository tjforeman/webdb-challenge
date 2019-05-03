
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl
      .increments();

        tbl
        .string('project_name', 128)
        .notNullable()
        .unique();

        tbl
        .string('description')
        .notNullable()
        .unique();

        tbl
        .boolean('completed')
        .notNullable()
    })
};

 exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('projects')
};
