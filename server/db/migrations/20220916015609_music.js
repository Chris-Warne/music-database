

exports.up = function(knex) {
  
return knex.schema.createTable('music', (table) =>{
table.increments('id')
table.string('songName')
table.string('genre')
table.string('mood')
table.string('url')



})


};


exports.down = function(knex) {
  
  return knex.schema.dropTable('music')

};
