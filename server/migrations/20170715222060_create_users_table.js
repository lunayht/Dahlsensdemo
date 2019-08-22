exports.up = function(knex) {
    return knex.schema.createTable('cameras', function(camera) {
                    camera.increments('id').primary().unsigned();
                    camera.string('b64img').notNullable();
                    camera.string('url').notNullable();
                    camera.string('title').notNullable();
                    camera.string('notes');
                })
};

exports.down = function (knex) {
    return knex.schema.dropTable('camera');
};