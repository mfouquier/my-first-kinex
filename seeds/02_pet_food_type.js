/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    { id: 1, food_type: 'Dog Food', brand: 'Purina' },
    { id: 2, food_type: 'Cat Food', brand: 'Iams' },
    { id: 3, food_type: 'Fish Food', brand: 'Tuna' }
  ]);
};
