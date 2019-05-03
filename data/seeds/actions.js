
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Fix the muffler',notes:'It makes a weird sound when you start the car, its very loud.',completed:false,project_id:1},
        {description: 'Change the oil',notes:'The oil must be two years old, get some new oil in there already.',completed:false,project_id:1},
        {description: 'Change the Spark Plugs',notes:'The car has a hard time starting. Buy and change the spark plugs and see if that helps',completed:false,project_id:1},
        {description: 'Turn over soil',notes:'Find a good spot with alot of sun, turn over the soil and loosen it up 2-3 feet deep',completed:false,project_id:2},
        {description: 'Build a small fence',notes:'The garden will need a small fence to keep rabbits and other critters from eating the produce.',completed:false,project_id:2},
        {description: 'Plant the desired plants',notes:'buy and plant Tomatoes, Bell peppers, Zucchini, and Banana Peppers ',completed:false,project_id:2},
        {description: 'Find free resouces',notes:'use things like freecodecamp and youtube videos to learn more.',completed:false,project_id:3},
        {description: 'Practice code challenges',notes:'Find challenges online and complete as many as possible in your free time.',completed:false,project_id:3},
        {description: 'Create projects',notes:'Think of a cool project and work on it for a few hours in the evening or weekend.',completed:false,project_id:3}
      ]);
    });
};
