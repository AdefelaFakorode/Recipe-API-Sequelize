'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Recipe", [
      {
        title: "Creamy Garlic Parmesan Chicken",
        description:
          "A delightful chicken dish with a creamy garlic Parmesan sauce, perfect for a comforting dinner.",
        ingredients:
          "4 boneless, skinless chicken breasts, 2 tablespoons olive oil, 4 cloves garlic, minced, 1 cup heavy cream, 1/2 cup grated Parmesan cheese, 1 teaspoon Italian seasoning, Salt and pepper to taste, Chopped fresh parsley for garnish",
        instructions:
          "Season the chicken breasts with salt and pepper. In a large skillet, heat olive oil over medium heat. Add the chicken breasts and cook until browned on both sides and cooked through. Remove the chicken from the skillet and set aside. In the same skillet, add minced garlic and sauté until fragrant. Pour in the heavy cream and bring to a simmer. Stir in grated Parmesan cheese and Italian seasoning. Continue cooking until the sauce thickens. Return the cooked chicken to the skillet and coat it with the sauce. Cook for an additional minute to heat everything through. Serve the creamy garlic Parmesan chicken over pasta or with a side of roasted vegetables. Garnish with chopped fresh parsley.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Vegetable Curry",
        description:
          "A flavorful vegetarian curry made with a variety of vegetables and aromatic spices.",
        ingredients:
          "1 tablespoon vegetable oil, 1 onion, chopped, 3 cloves garlic, minced, 1 tablespoon curry powder, 1 teaspoon ground cumin, 1 teaspoon ground coriander, 1/2 teaspoon turmeric, 1 can coconut milk, 2 cups mixed vegetables (e.g., carrots, potatoes, bell peppers, peas), Salt to taste, Chopped fresh cilantro for garnish",
        instructions:
          "Heat vegetable oil in a large pot or skillet over medium heat. Add chopped onion and minced garlic, and sauté until the onion becomes translucent. Stir in curry powder, cumin, coriander, and turmeric, and cook for another minute to toast the spices. Pour in the coconut milk and bring to a simmer. Add the mixed vegetables and season with salt. Cover the pot and let the curry simmer for about 15-20 minutes or until the vegetables are tender. Taste and adjust the seasoning if needed. Serve the vegetable curry over steamed rice or with naan bread. Garnish with chopped fresh cilantro.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    
  },


  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Recipe", null, {});
    
  }
};
