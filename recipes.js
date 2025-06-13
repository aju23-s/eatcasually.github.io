const recipes = [
    {
        id: 1,
        title: "Classic Pancakes",
        description: "Fluffy, golden pancakes perfect for breakfast",
        servings: 4,
        cookingTime: 20,
        imageUrl: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        category: "Bakery",
        ingredients: [
            { amount: "1 1/2 cups", item: "all-purpose flour" },
            { amount: "3 1/2 teaspoons", item: "baking powder" },
            { amount: "1/4 teaspoon", item: "salt" },
            { amount: "1 tablespoon", item: "sugar" },
            { amount: "1 1/4 cups", item: "milk" },
            { amount: "1", item: "egg" },
            { amount: "3 tablespoons", item: "melted butter" }
        ],
        instructions: [
            "Mix flour, baking powder, salt, and sugar in a bowl",
            "In another bowl, whisk milk, egg, and melted butter",
            "Combine wet and dry ingredients until just mixed",
            "Heat a griddle or pan over medium heat",
            "Pour 1/4 cup batter for each pancake",
            "Cook until bubbles form, then flip and cook other side"
        ]
    },
    {
        id: 2,
        title: "Mediterranean Salad",
        description: "Fresh and healthy Mediterranean-style salad",
        servings: 2,
        cookingTime: 15,
        imageUrl: "https://images.unsplash.com/photo-1512058454905-6b841e7ad132",
        category: "Salad",
        ingredients: [
            { amount: "2 cups", item: "cherry tomatoes" },
            { amount: "1", item: "cucumber" },
            { amount: "1", item: "red onion" },
            { amount: "1 cup", item: "kalamata olives" },
            { amount: "200g", item: "feta cheese" },
            { amount: "2 tbsp", item: "olive oil" },
            { amount: "1 tbsp", item: "balsamic vinegar" }
        ],
        instructions: [
            "Halve the cherry tomatoes",
            "Dice the cucumber and red onion",
            "Combine all vegetables in a bowl",
            "Crumble feta cheese over top",
            "Drizzle with olive oil and balsamic vinegar",
            "Toss gently and serve"
        ]
    },
    {
        id: 3,
        title: "Greek Salad",
        description: "Fresh Mediterranean bowl",
        servings: 2,
        cookingTime: 20,
        imageUrl: "https://plus.unsplash.com/premium_photo-1690561082029-0eb2ed65a09f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Salad",
        ingredients: [
            { amount: "1", item: "Cucumber (chopped)" },
            { amount: "2", item: "Tomatoes (wedged)" },
            { amount: "1/2", item: "Red onion (sliced)" },
            { amount: "100 gm", ites: "Kalamata olives" },
            { amount: "150 gm", item: "Feta cheese (cubed)" },
            { amount: "3 tbsp", item: "Olive oil" },
            { amount: "1 tbsp", item: "Oregano" },
            { amount: "To Taste", item: "Salt - Pepper" }
        ],
        instructions: [
            "Combine cucumber, tomatoes, onion, and olives in a bowl.",
            "Top with feta cheese and drizzle olive oil.",
            "Sprinkle oregano, salt, and pepper. Toss lightly before serving."
        ]
    },
    {
        id: 4,
        title: "Margherita Pizza",
        description: "Classic Neapolitan-style pizza",
        servings: 2,
        cookingTime: 50,
        imageUrl: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1589187151053-5ec8818e661b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww",
        category: ["Veg", "Bakery"],
        ingredients: [
            { amount: "1", item: "Pizza dough ball" },
            { amount: "100 ml", item: "Tomato sauce" },
            { amount: "150 gm", item: "Fresh mozzarella (sliced)" },
            { amount: "Handful", item: "Fresh basil leaves" },
            { amount: "2 tbsp", item: "Olive oil" },
            { amount: "To Taste", item: "Salt - Oregano" }
        ],
        instructions: [
            "Preheat oven to 250°C. Stretch dough into a thin circle.",
            "Spread tomato sauce, leaving a border. Arrange mozzarella on top.",
            "Drizzle olive oil and sprinkle salt/oregano.",
            "Bake for 10-12 minutes or until crust is golden.",
            "Garnish with basil leaves before serving."
        ]
    },
    {
        id: 5,
        title: "Creamy Mushroom Risotto",
        description: "Rich and velvety Italian comfort food",
        servings: 2,
        cookingTime: 50,
        imageUrl: "https://plus.unsplash.com/premium_photo-1694850980331-fd0dd7f6617b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Veg",
        ingredients: [
            { amount: "200 gm", item: "Arborio rice" },
            { amount: "150 gm", item: "Mushrooms (sliced)" },
            { amount: "1 L", item: "Vegetable broth" },
            { amount: "100 ml", item: "White wine" },
            { amount: "50 gm", item: "Parmesan cheese (grated)" },
            { amount: "1", item: "Onion (finely chopped)" },
            { amount: "2 cloves", item: "Garlic (minced)" },
            { amount: "30 gm", item: "Butter" },
            { amount: "2 tbsp", item: "Olive oil" },
            { amount: "To Taste", item: "Salt - Pepper" }
        ],
        instructions: [
            "Heat olive oil and half the butter in a pan. Sauté onions until translucent.",
            "Add garlic and mushrooms; cook until mushrooms soften.",
            "Stir in Arborio rice and toast for 2-3 minutes.",
            "Pour in white wine and simmer until absorbed.",
            "Gradually add warm broth, one ladle at a time, stirring constantly.",
            "Cook until rice is al dente (about 18-20 minutes).",
            "Mix in remaining butter, Parmesan, salt, and pepper. Serve immediately."
        ]
    },
    {
        id: 6,
        title: "Chicken Tikka Masala",
        description: "Spicy grilled chicken in tomato-cream sauce",
        servings: 2,
        cookingTime: 150,
        imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyMFRpa2thJTIwTWFzYWxhfGVufDB8fDB8fHww",
        category: "Non-Veg",
        ingredients: [
            { amount: "500 gm", item: "Chicken breast (cubed)" },
            { amount: "150 gm", item: "Yogurt" },
            { amount: "1 tbsp", item: "Garam masala" },
            { amount: "1 tsp", item: "Turmeric" },
            { amount: "200 ml", item: "Tomato" },
            { amount: "100 ml", item: "Heavy cream" },
            { amount: "3 cloves", item: "Garlic (minced)" },
            { amount: "1 inch", item: "Ginger (grated)" },
            { amount: "1", item: "Onion (chopped)" },
            { amount: "2 tbsp", item: "Oil" },
            { amount: "To Taste", item: "Salt - Sugar" }
        ],    
        "instructions": [
    "Marinate chicken with yogurt, garam masala, turmeric, and salt for 30 mins.",
    "Heat oil in a pan. Sauté onions, garlic, and ginger until golden.",
    "Add marinated chicken and cook until lightly charred.",
    "Stir in tomato and simmer for 10 minutes.",
    "Pour in cream and adjust seasoning with salt/sugar. Serve with naan."
  ],
  "tips": [
    "Use ghee instead of oil for a richer flavor.",
    "Add chili powder if you prefer it spicy.",
    "Crushed fenugreek leaves (kasuri methi) add a restaurant-style aroma.",
    "Overnight marination deepens the flavor."
  ]
    },
    {
        id: 7,
        title: "Thai Veggie Stir-Fry",
        description: "Crunchy vegetables in tangy sauce",
        servings: 2,
        cookingTime: 50,
        imageUrl: "https://kristineskitchenblog.com/wp-content/uploads/2024/01/vegetable-stir-fry-22-3.jpg",
        category: "Veg",
        ingredients: [
            { amount: "100 gm", item: "Broccoli florets" },
            { amount: "1", item: "Bell pepper (sliced)" },
            { amount: "50 gm", item: "Carrot (julienned)" },
            { amount: "50 gm", item: "Snow peas" },
            { amount: "2 tbsp", item: "Soy sauce" },
            { amount: "1 tbsp", item: "Sesame oil" },
            { amount: "1 tbsp", item: "Honey" },
            { amount: "1 clove", item: "Garlic (minced)" },
            { amount: "1 tsp", item: "Ginger (grated)" },
            { amount: "1 tbsp", item: "Cornstarch (mixed in 50ml water)" }
        ],
        instructions: [
            "Heat sesame oil in a wok. Add garlic and ginger; sauté until fragrant.",
            "Toss in all vegetables and stir-fry on high heat for 4-5 minutes.",
            "Mix soy sauce and honey; pour over veggies.",
            "Add cornstarch slurry to thicken the sauce. Serve with jasmine rice."
        ]
    },
    {
        id: 8,
        title: "Classic Carbonara",
        description: "Creamy spaghetti pasta",
        servings: 1,
        cookingTime: 30,
        imageUrl: "https://images.unsplash.com/photo-1627207644206-a2040d60ecad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyYm9uYXJhfGVufDB8fDB8fHww",
        category: "Non-Veg",
        ingredients: [
            { amount: "80 gm", item: "Spaghetti" },
            { amount: "40 gm", item: "Bacon" },
            { amount: "20 gm", item: "Butter" },
            { amount: "5 gm / 2 cloves", item: "Garlic Chopped" },
            { amount: "50 gm", item: "Cream" },
            { amount: "1", item: "Egg yolk" },
            { amount: "30 gm", item: "Cheese" },
            { amount: "To Taste", item: "Salt - Pepper" }

        ],
        instructions: [
            "Boil the spaghetti with little salt and oil in water for 8-10 min and keep the water",
            "Heat the pan and melt the butter in low flame or it will burn",
            "Add Becon and let it fry",
            "For veg replace bacon with Mushroom, capsicum and saute",
            "After that add chopped garlic",
            "pour 50 gm of cream to make it creamy",
            "Whisk the cream while adding egg yolk",
            "You can pour pasta water as you like and Cheese at the same time",
            "Mix the pasta with sauce and saute a bit",
            "Serve hot"

        ]
    },
    {
        id: 9,
        title: "Bruschetta",
        description: "Toasted bread with fresh tomato topping",
        cookingTime: 20,
        imageUrl: "https://plus.unsplash.com/premium_photo-1677686707252-16013f466e61?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Veg",
        ingredients: [
            { amount: "4 slices", item: "Bread " },
            { amount: "2", item: "Tomatoes (diced)" },
            { amount: "2", item: "Onion (diced)" },
            { amount: "2 cloves", item: "Garlic (minced)" },
            { amount: "Handful", item: "Fresh basil or Coriander(chopped)" },
            { amount: "2 tbsp", item: "Olive oil" },
            { amount: "To Taste", item: "Salt - Pepper" }
        ],
        instructions: [
            "Toast bread slices until golden.",
            "Rub one side of each slice with garlic.",
            "Add Mayonnaise if Possible ",
            "Mix tomatoes, onions, basil (Or Coriander), olive oil, salt, and pepper in a bowl.",
            "Spoon the tomato mixture onto the toasted bread.",
            "Serve immediately as an appetizer."
        ]
    },
    {
        id: 10,
        title: "Butter Chicken",
        description: "Creamy tomato-based curry with tender chicken",
        servings: 4,
        cookingTime: 45,
        imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Non-Veg",
        ingredients: [
            { amount: "800 g", item: "Tomato" },
            { amount: "80 g", item: "Cashew" },
            { amount: "50–80 g", item: "Magaj (melon seeds)" },
            { amount: "40 g", item: "Butter" },
            { amount: "100 ml", item: "Cream" },
            { amount: "1 tbsp (~6 g)", item: "Cumin Powder" },
            { amount: "2 tbsp (~12 g)", item: "Coriander Powder" },
            { amount: "1 tbsp (~6 g)", item: "Kashmiri Mirch" },
            { amount: "120 g", item: "Chicken" },
            { amount: "2 pods (~0.5 g)", item: "Cardamom" },
            { amount: "1 inch (~2 g)", item: "Cinnamon Stick" },
            { amount: "2–3 pcs (~1.5 g)", item: "Bay Leaf" },
            { amount: "480 g", item: "Chicken" }

        ],
        instructions: [
            "Boil tomatoes, cashews (or magaj), and whole spices (cardamom, cinnamon, bay leaf) for 10–12 minutes. Cool and blend into a smooth paste.",
            "Heat butter in a pan. Add the prepared paste and cook for 4–5 minutes until it thickens slightly.",
            "Add cumin powder, coriander powder, and Kashmiri mirch. Cook for another 2–3 minutes until the spices are fragrant.",
            "Add cream and mix well. Simmer the gravy for 5 minutes on low heat.",
            "Add cooked chicken (120 g + 480 g) to the gravy. Simmer for 10–15 minutes until the chicken is tender and fully coated.",
            "Adjust salt and sugar to taste. Serve hot with naan or rice."
        ]

    },
    {
        id: 11,
        title: "Palak Paneer",
        description: "Spinach curry with soft cottage cheese cubes",
        servings: 3,
        cookingTime: 35,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/1024px-Palakpaneer_Rayagada_Odisha_0009.jpg",
        category: "Veg",
        ingredients: [
            { amount: "200 gm", item: "Paneer (cubed)" },
            { amount: "3 cups", item: "Spinach leaves" },
            { amount: "1", item: "Onion (chopped)" },
            { amount: "2", item: "Tomatoes (chopped or blended)" },
            { amount: "1 tsp", item: "Cumin seeds" },
            { amount: "1/2 tsp", item: "Turmeric" },
            { amount: "1 tsp", item: "Coriander powder" },
            { amount: "2 tbsp", item: "Ghee" }
        ],
        instructions: [
            "Blanch spinach in boiling water, then blend into a puree.",
            "Sautè or fry paneer as your liking",
            "Heat ghee. Temper cumin seeds and sauté onions until golden.",
            "Add tomato  and spices. Cook until thickened.",
            "Mix in spinach puree and paneer cubes. Simmer for 8-10 minutes."
        ]
    },
    {
        id: 12,
        title: "Chole Bhature",
        description: "Spiced chickpeas with fried bread",
        servings: 4,
        cookingTime: 50,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/450px-Chole_Bhature_At_Local_Street.jpg",
        category: ["Veg", "Vegan"],

        ingredients: [
            { amount: "2 cups", item: "Chickpeas (soaked overnight)" },
            { amount: "2", item: "Tea bags" },
            { amount: "2 tsp", item: "Chole masala" },
            { amount: "1 tsp", item: "Amchur powder" },
            { amount: "1", item: "Onion (finely chopped)" },
            { amount: "3 cups", item: "All-purpose flour (for bhature)" },
            { amount: "1 cup", item: "Yogurt (for dough)" }
        ],
        instructions: [
            "Pressure-cook chickpeas with tea bags for 4 whistles.",
            "Sauté onions, ginger-garlic paste, and spices. Add cooked chickpeas.",
            "For bhature: Mix flour, yogurt, and salt. Knead dough. Roll and deep-fry.",
            "Serve hot chole with puffed bhature and pickled onions."
        ]
    },
    {
        id: 13,
        title: "Afghani Chicken",
        description: "Creamy Chicken with onion gravy",
        servings: 4,
        cookingTime: 50,
        imageUrl: "https://butfirstchai.com/wp-content/uploads/2024/02/afghani-chicken-curry-recipe.jpg",
        category: "Non-Veg",

        ingredients: [
            // Marination
            { amount: "480 g", item: "Chicken" },
            { amount: "1 tsp", item: "Salt" },
            { amount: "1 tsp", item: "Ginger (grated, for marination)" },
            { amount: "1 tsp", item: "Garlic (minced, for marination)" },
            { amount: "1 tbsp", item: "Cream or yogurt (for marination)" },

            // Gravy base
            { amount: "600 g", item: "Onion" },
            { amount: "3 pcs (~30 g)", item: "Green Chili" },
            { amount: "10 g", item: "Coriander Leaf" },
            { amount: "1 inch (~15 g)", item: "Ginger" },
            { amount: "4–6 cloves (~20 g)", item: "Garlic" },
            { amount: "80 g", item: "Cashew" },
            { amount: "80 g", item: "Magaj (melon seeds)" },
            { amount: "40 g", item: "Butter" },
            { amount: "100 ml", item: "Cream" },
            { amount: "To Taste", item: "Salt" },

            // Whole spices
            { amount: "4–6 pods (~1.5 g)", item: "Cardamom" },
            { amount: "1 inch (~2 g)", item: "Cinnamon Stick" },
            { amount: "2–3 pcs (~1.5 g)", item: "Bay Leaf" },
            { amount: "3 pcs (~0.5 g)", item: "Cloves" }
        ],
        instructions: [
            "Marinate chicken with 1 tsp salt, 1 tsp grated ginger, 1 tsp minced garlic, and 1 tbsp cream or yogurt. Set aside for at least 30 minutes.",
            "Boil onions, green chili, sliced ginger, garlic, cashew, magaj, and whole spices (cardamom, cinnamon, bay leaf, cloves) in water for 10–12 minutes. Let it cool, then blend into a smooth paste.",
            "Heat butter in a pan. Add the blended paste and sauté for 5–7 minutes until the mixture thickens and oil begins to separate.",
            "Add cream to the pan and mix well. Simmer for 3–4 minutes on low heat.",
            "Pan fry Chicken in butter or oil until golden brown.",
            "Add Cooked chicken and coat it well in the gravy. Cover and cook for 15–20 minutes until the chicken is fully cooked and tender.",
            "Garnish with chopped coriander leaves and serve hot with rice or naan."
        ]
    },
    {
  id: 14,
  title: "Aloo Tama",
  description: "Traditional Nepali curry made with potatoes and fermented bamboo shoots",
  servings: 4,
  cookingTime: 40,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Aloo_Tama.jpg",
  category: "Veg",

  ingredients: [
    // Base vegetables
    { amount: "2 medium", item: "Potatoes (peeled & diced)" },
    { amount: "1 cup", item: "Tama (fermented bamboo shoots, rinsed)" },
    { amount: "1/2 cup", item: "Black-eyed peas (boiled)" },

    // Aromatics & base
    { amount: "1", item: "Onion (chopped)" },
    { amount: "2", item: "Tomatoes (chopped)" },
    { amount: "3 cloves", item: "Garlic (minced)" },
    { amount: "1 inch", item: "Ginger (grated)" },
    { amount: "2", item: "Green chilies (sliced, optional)" },

    // Spices
    { amount: "1/2 tsp", item: "Turmeric powder" },
    { amount: "1 tsp", item: "Cumin powder" },
    { amount: "1 tsp", item: "Coriander powder" },
    { amount: "1/2 tsp", item: "Chili powder (optional)" },
    { amount: "To taste", item: "Salt" },

    // Oil & garnish
    { amount: "2 tbsp", item: "Mustard oil (or vegetable oil)" },
    { amount: "As needed", item: "Fresh coriander – for garnish" }
  ],

  instructions: [
    "Heat mustard oil in a pan until it begins to smoke lightly.",
    "Add chopped onions, garlic, and ginger. Sauté until golden brown.",
    "Add turmeric, cumin, coriander, and chili powder. Stir briefly.",
    "Add diced potatoes and cook for 5–7 minutes, stirring occasionally.",
    "Add chopped tomatoes and green chilies. Cook until tomatoes soften.",
    "Add rinsed tama (fermented bamboo shoots) and boiled black-eyed peas. Mix well.",
    "Pour in enough water to make a curry. Simmer until potatoes are fully cooked (about 10 minutes).",
    "Season with salt. Adjust spices and water to your liking.",
    "Garnish with fresh coriander leaves and serve hot with steamed rice or roti."
  ]
}


];
