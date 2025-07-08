const recipes = [
    {
        id: 1,
        title: "Classic Pancakes",
        description: "Fluffy, golden pancakes perfect for breakfast",
        servings: 4,
        cookingTime: 20,
        imageUrl: "https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg",
        category: "Bakery",
        ingredients: [
            { amount: "1 cups", item: "all-purpose flour" },
            { amount: "1 teaspoons", item: "baking powder" },
            { amount: "1/4 teaspoon", item: "salt" },
            { amount: "1 tablespoon", item: "sugar" },
            { amount: "1/2 cups", item: "milk" },
            { amount: "1", item: "egg" },
            { amount: "1/2 teaspoon", item:"Vanilla essance"},
            { amount: "3 tablespoons", item: "melted butter" }
        ],
        instructions: [
            "Mix flour, baking powder, salt, and sugar in a bowl",
            "In another bowl, whisk milk, egg, vanilla and melted butter",
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
            { amount: "100 gm", item: "olives" },
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
            { amount: "200 ml", item: "Tomato (Chopped)" },
            { amount: "100 ml", item: "Heavy cream" },
            { amount: "3 cloves", item: "Garlic (minced)" },
            { amount: "1 inch", item: "Ginger (grated)" },
            { amount: "1", item: "Onion (chopped)" },
            { amount: "2 tbsp", item: "Oil" },
            { amount: "To Taste", item: "Salt - Sugar" }
        ],
        instructions: [
            "In a large bowl, combine chicken cubes with yogurt, garam masala, turmeric, and salt. Mix well, cover, and marinate for at least 30 minutes (or overnight for deeper flavor).",
            "Heat oil or ghee in a pan over medium heat. Add chopped onions and sauté until soft and golden brown.",
            "Stir in the minced garlic and grated ginger. Cook for 1–2 minutes until fragrant.",
            "Add the marinated chicken pieces to the pan. Cook on high heat for 5–7 minutes until the chicken is lightly charred on the outside.",
            "Add in the tomato and stir well. Reduce the heat to medium-low and simmer for 10 minutes, allowing the chicken to cook through and absorb the tomato flavor.",
            "Add the heavy cream and stir to combine. Simmer gently for another 3–5 minutes, stirring occasionally.",
            "Taste the curry and adjust salt and sugar as needed. If desired, add red chili powder for more heat or crushed kasuri methi for a restaurant-style finish.",
            "Turn off the heat. Let it rest for 2 minutes, then serve hot with naan, roti, or steamed basmati rice."
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
            { amount: "4 slices", item: "Ciabatta bread" },
            { amount: "2", item: "Tomatoes (diced)" },
            { amount: "2", item: "Onion (diced)" },
            { amount: "2 cloves", item: "Garlic (minced)" },
            { amount: "Handful", item: "Fresh basil (chopped)" },
            { amount: "2 tbsp", item: "Olive oil" },
            { amount: "To Taste", item: "Salt - Pepper" }
        ],
        instructions: [
            "Toast ciabatta slices until golden.",
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
            { amount: "2", item: "Tomatoes (pureed)" },
            { amount: "1 tsp", item: "Cumin seeds" },
            { amount: "1/2 tsp", item: "Turmeric" },
            { amount: "1 tsp", item: "Coriander powder" },
            { amount: "2 tbsp", item: "Ghee" }
        ],
        instructions: [
            "Blanch spinach in boiling water, then blend into a puree.",
            "Heat ghee. Temper cumin seeds and sauté onions until golden.",
            "Add tomato puree and spices. Cook until thickened.",
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
    title: "Keema Noodles & Bok Choy",
    description: "A spicy and savory noodle dish with keema, bok choy, and Nepali timur twist",
    servings: 2,
    cookingTime: 30,
    imageUrl: "https://i.pinimg.com/736x/e3/8a/42/e38a42ae26fe273b9dacd036c1d6723a.jpg", // Replace with your image if needed
    category: "Non-veg",
    ingredients: [
        { amount: "70 gm", item: "spaghetti (uncooked)" },
        { amount: "15 gm", item: "chili flakes" },
        { amount: "6 gm", item: "timur (Sichuan pepper)" },
        { amount: "a pinch", item: "salt" },
        { amount: "125 ml", item: "mustard oil" },
        { amount: "40 gm", item: "onion, finely chopped" },
        { amount: "25 gm", item: "ginger, minced" },
        { amount: "25 gm", item: "garlic, minced" },
        { amount: "800 gm", item: "keema (minced meat)" },
        { amount: "6 gm", item: "red chili powder" },
        { amount: "10 ml", item: "soy sauce" },
        { amount: "100 gm", item: "tomato, chopped" },
        { amount: "40 gm", item: "spring onion, chopped" },
        { amount: "2-3 leaves", item: "bok choy, Whole" }
    ],
    instructions: [
        "Boil the spaghetti in salted water until al dente.",
        "Put Bok Choy in the same hot water, Drain and set aside.",
        "In a large pan, heat little mustard oil until it begins to smoke slightly, then lower the heat.",
        "Add finely chopped onions and sauté until golden brown.",
        "Stir in the minced ginger and garlic ( Keep little garlic aside)",
        "Cook for minutes until aromatic.",
        "Add the keema and cook over medium heat, stirring often, until the meat is browned and cooked through (about 10–12 minutes).",
        "Sprinkle in red chili powder and soy sauce. Stir well to combine the spices.",
        "Add the chopped tomatoes and cook until soft and incorporated into the mixture.",
        "For sauce, add chili flakes, timur, and salt in a bowl.",
        "Heat the remaining mustard oil in a small pan, then pour it over the chili-timur mixture to create a spicy oil.",
        "For searving put a little oil in a bowl, add the cooked spaghettion top.",
        "Add the keema mixture on top of the noodles.",
        "Garnish with chopped spring onions and bok choy leaves.",
        "Drizzle the spicy oil over the dish before serving."
    ]
},
{
    id: 15,
    title: "Tortilla Egg Wrap with Spicy Veg Sauce",
    description: "A flavorful tortilla wrap loaded with veggies, eggs, and a tangy-spicy homemade sauce",
    servings: 1,
    cookingTime: 20,
    imageUrl: "https://ministryofcurry.com/wp-content/uploads/2023/11/Kolkatta-Egg-Roll-4.jpg", // Replace with your own image if needed
    category: "Non-Veg",
    ingredients: [
        { amount: "2", item: "tortilla" },
        { amount: "2", item: "whole eggs" },
        { amount: "2 medium", item: "onions, sliced" },
        { amount: "30 gm", item: "carrot, julienned" },
        { amount: "40 gm", item: "capsicum, julienned" },
        { amount: "2 tsp", item: "vinegar" },
        { amount: "2", item: "green chilies, chopped" },

        // For the sauce
        { amount: "80 gm", item: "tomato ketchup" },
        { amount: "2 tbsp", item: "red chili sauce or crushed red chilies" },
        { amount: "1/2 tsp", item: "chaat masala" },
        { amount: "1 tsp", item: "sugar" }
    ],
    instructions: [
        "This recipe is for 2 portion so 1 egg and 1 tortilla per person. No Cheating.",
        "In a bowl, add sliced onion, carrot, capsicum, vinegar, and chopped green chilies.",
        "For sauce, mix tomato ketchup, red chili sauce, chaat masala, and sugar in a small bowl until well combined.",
        "Heat a non-stick pan over medium heat. Add bitten eggs with chopped chilly and salt.",
        "Put the tortilla on top of the eggs and let it cook for a minute until the eggs are set.",
        "Flip the tortilla with eggs onto a plate, then add the veggie mixture on one half of the tortilla.",
        "Drizzle the spicy sauce over the veggies.",
        "Roll the tortilla tightly, folding in the sides to secure the filling.",
        "Serve hot with extra sauce on the side if desired.",
        "Note: You can skip egg and add sauteed paneer or Chicken as yu liking."
    ]
},
{
    id: 16,
    title: "Vegetable Fried Rice",
    description: "A quick and delicious fried rice loaded with vegetables and flavored with soy and vinegar",
    servings: 4,
    cookingTime: 25,
    imageUrl: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your own image if needed
    category: "Veg",
    ingredients: [
        { amount: "500 gm", item: "cooked rice (preferably cooled)" },
        { amount: "50 gm", item: "onion, finely chopped" },
        { amount: "60 gm", item: "cabbage, shredded" },
        { amount: "30 gm", item: "carrot, julienned" },
        { amount: "50 gm", item: "capsicum, julienned" },
        { amount: "10 gm", item: "ginger-garlic chopped" },
        { amount: "1 tbsp", item: "soy sauce" },
        { amount: "1/2 tbsp", item: "vinegar" },
        { amount: "1 tbsp", item: "tomato ketchup" },
        { amount: "to taste", item: "salt and pepper" }
    ],
    instructions: [
        "Heat a large pan or wok over high heat and add a small amount of oil.",
        "Add chopped onions and stir-fry for a minutes until translucent.",
        "Add ginger-garlic and stir until aromatic.",
        "(For non-veg option, you can add chicken at this stage. And once chicken is cooked, add the vegetables.)",
        "Toss in the cabbage, carrot, and capsicum. Stir-fry for 3–4 minutes, keeping the vegetables slightly crunchy.",
        "Add soy sauce, vinegar, and ketchup. Mix well to coat the vegetables evenly.",
        "Now add the cooked rice and gently mix everything together. Break up any clumps while mixing.",
        "Season with salt and freshly ground pepper to taste.",
        "Stir-fry for another 2–3 minutes on high heat to combine all flavors.",
        "Serve hot as a main dish or with a side of stir-fried vegetables."
    ]
},
{
    id: 17,
    title: "Salchipapa",
    description: "A quick and delicious Snacks loaded with Sausage, fries and Spicy sauces.",
    servings: 2,
    cookingTime: 15,
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgluttodigest.com%2Fsalchipapas-latin-fries-bring-all-the-flavor%2F&psig=AOvVaw3tR8G-D4wjDrLyXXOL_HDG&ust=1752072699447000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiG9t7BrY4DFQAAAAAdAAAAABAE", // Replace with your own image if needed
    category: "Non-veg",
    ingredients: [
        { amount: "3 whole", item: "Sausage (Sliced)" },
        { amount: "10 gm", item: "onion, finely chopped" },
        { amount: "5 gm", item: "Garlic (Chopped)" },
        { amount: "150 gm", item: "French Fries" },
        { amount: "50 gm", item: "Mayo" },
        { amount: "40 gm", item: "tomato ketchup" },
        { amount: "to taste", item: "salt and pepper" }
    ],
    instructions: [
        "Heat the pan and saute Onion garlic.",
        "After a aromatic smell add sliced sausage and cook until golden brown.",
        "Add Salt Pepper as your likings.",
        "fry the French fries until golden and crispy.",
        "In a serving plate, add the cooked sausage and onion mixture on top of the French fries.",
        "Drizzle with mayonnaise and tomato ketchup."
    ]
}




];
