
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Fix Car',description:'The car is broken find a way to fix it',completed:false},
        {project_name: 'Plant Garden',description:'Lets have some fresh food this year',completed:false},
        {project_name: 'Learn more Javascript',description:'Skills are weak must improve',completed:false}
      ]);
    });
};
