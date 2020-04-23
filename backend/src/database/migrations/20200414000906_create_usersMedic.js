exports.up = function(knex) {
    return knex.schema.createTable('medicusers', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('crm', 11).notNullable();
        table.string('password').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })   
};

exports.down = function(knex) {
  return knex.schema.dropTable('medicusers');
};