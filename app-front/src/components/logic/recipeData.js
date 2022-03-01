const recipeData = [
    {
        "recipe_id":1,
        "recipe": "Bacon Love Bombs",
        "video_url": "https://www.youtube.com/watch?v=Qg1Mymg7-w8",
        "img_path": "assets/recipe-images/bacon_bombs.png",
        "summary": "Pork shoulder, wrapped in bacon, vegetables and spices by choice, chilies for heat, planet-DAMN bbq sauce.",
        "cooking_time":37,
        "servings":2
    },
    {
        "recipe_id":2,
        "recipe": "Sirloin Steak",
        "video_url": "https://www.youtube.com/watch?v=kqTHVBOXPGM",
        "img_path": "assets/recipe-images/sirloin_steak.png",
        "summary": "Sirloin steak (medium-rare), smoked garlic and smoked sea salt, herb brush for applying spiced olive oil.",
        "cooking_time":8,
        "servings":2

    },
    {
        "recipe_id":3,
        "recipe": "Turbo Tuna Salad",
        "video_url": "https://www.youtube.com/watch?v=ktNuUm7xMOk",
        "img_path": "assets/recipe-images/turbo_tuna_salad.png",
        "summary": "Tuna steak, smoked potatoes, grilled and fresh vegetables, squeaky cheese (halloumi), eggs, and a salad dressing.",
        "cooking_time":8,
        "servings":2
    },
    {
        "recipe_id":4,
        "recipe": "Tomahawk Steak",
        "video_url": "https://www.youtube.com/watch?v=SafN9gybBd0",
        "img_path": "assets/recipe-images/tomahawk_steak.png",
        "summary": "Tomahawk steak, cajun spice rub hispi cabbage, smoked potatoes with cream cheese, umami bomb (anchovies and smoked garlic).",
        "cooking_time":8,
        "servings":2
    },
    {
        "recipe_id":5,
        "recipe": "Chorizo Breakfast Tacos",
        "video_url": "https://www.youtube.com/watch?v=tmdHY8nfCps",
        "img_path": "assets/recipe-images/breakfast_tacos.png",
        "summary": "Chorizo (pork) fried in eggs, chopped grilled vegetables, dirty onion, pickled radish, cheese, Pico de Gallo, and flour tortillas.",
        "cooking_time":20,
        "servings":3
    },
    {
        "recipe_id":6,
        "recipe": "Maple Marinated Salmon",
        "video_url": "https://www.youtube.com/watch?v=LEtverM26uc",
        "img_path": "assets/recipe-images/maple_marinated_salmon.png",
        "summary": "Grilled skin-on salmon steak marinated in maple-soy sauce and ginger.",
        "cooking_time":8,
        "servings":2
    },
    {
        "recipe_id":7,
        "recipe": "Meatball Sub",
        "video_url": "https://www.youtube.com/watch?v=yax3RFBknJ4",
        "img_path": "assets/recipe-images/meatball_sub.png",
        "summary": "Smoked meatballs loaded with cheese and topped with spiced smooth marinara (tomato) sauce, served on a submarine bread roll.",
        "cooking_time":15,
        "servings":3
    },
    {
        "recipe_id":8,
        "recipe": "Meatloaf",
        "video_url": "https://www.youtube.com/watch?v=XTby4jqs1CI",
        "img_path": "assets/recipe-images/meatloaf.png",
        "summary": "Minced pork and beef, onion, green pepper, garlic, carrot, cheese, Worcester sauce, Old Bay rub, eggs, and planet-DAMN sauce.",
        "cooking_time":85,
        "servings":4
    },
    {
        "recipe_id":9,
        "recipe": "Steak Baguette",
        "video_url": "https://www.youtube.com/watch?v=-DB9Z1HUxTM",
        "img_path": "assets/recipe-images/steak_baguette.png",
        "summary": "Bavette steak, french fries, cheese, onions, fresh vegetables, cheese, and Genepi liqueur, served on a baguette.",
        "cooking_time":8,
        "servings":2
    },
    {
        "recipe_id":10,
        "recipe": "Stuffed Pork Fillet",
        "video_url": "https://www.youtube.com/watch?v=UygxzCteV94",
        "img_path": "assets/recipe-images/stuffed_pork_fillet.png",
        "summary": "Pork fillet stuffed with spicy Indian sausage wrapped in pancetta bacon and finished with a sage leaf.",
        "cooking_time":45,
        "servings":3
    },
    {
        "recipe_id":11,
        "recipe": "Smoked Lamb Shanks",
        "video_url": "https://www.youtube.com/watch?v=pAunnf8K9mo",
        "img_path": "assets/recipe-images/smoked_lamb_shanks.png",
        "summary": "Smoked lamb shanks rubbed with Promite and other spices - salt, browns sugar, coriander, pepper, garlic, and chilly flakes.",
        "cooking_time":126,
        "servings":4
    },
    {
        "recipe_id":12,
        "recipe": "Spicy Guacamole",
        "video_url": "https://www.youtube.com/watch?v=EfNSfRMtcoA",
        "img_path": "assets/recipe-images/spicy_guacamole.png",
        "summary": "Spicy, chunky Guacamole made from ripe avocados, chilies, onions, tomato, coriander, salt, and lime juice.",
        "cooking_time":8,
        "servings":1
    },
    {
        "recipe_id":13,
        "recipe": "ChimiChurri Sauce",
        "video_url": "https://www.youtube.com/watch?v=Lrn4_Hfjx8k",
        "img_path": "assets/recipe-images/chimichurri_steak_sauce.png",
        "summary": "Tangi ChimmiChurri sauce made from parsley, coriander, cilantro, garlic, chilies, vinegar, sea salt, pepper, olive oil, and oregano.",
        "cooking_time":8,
        "servings":1
    },
    {
        "recipe_id":14,
        "recipe": "Rump Steak and Grilled Veg Salad",
        "video_url": "https://www.youtube.com/watch?v=-mA3tOB41QQ",
        "img_path": "assets/recipe-images/rump_steak_and_grilled_veg_salad.png",
        "summary": "Rump steak served with a grilled vegetable salad - eggplants, peppers, dirty onions, tomatoes, spring onions, mushrooms, lemon.",
        "cooking_time":20,
        "servings":4
    },
    {
        "recipe_id":15,
        "recipe": "Korean Philly Cheese Steak",
        "video_url": "https://www.youtube.com/watch?v=gTwDFgZNQUo",
        "img_path": "assets/recipe-images/korean_philly_cheese_steak.png",
        "summary": "Korean BBQ-inspired Philly Cheesesteak, marinated bulgogi-style.",
        "cooking_time":36,
        "servings":1
    },
    {
        "recipe_id":16,
        "recipe": "Piri-Piri Chicken Wings",
        "video_url": "https://www.youtube.com/watch?v=GjXI-nkxADw",
        "img_path": "assets/recipe-images/piri_piri_chicken_wings.png",
        "summary": "Chicken wings rubbed with brown sugar and other spices, marinaded in Piri-Piri sauce, served with a cream fresh blue cheese hot sauce.",
        "cooking_time":50,
        "servings":2
    },
    {
        "recipe_id":17,
        "recipe": "Za`atar and Honey Glazed Spatchcock Chicken",
        "video_url": "https://www.youtube.com/watch?v=9rgDcS7JU-k",
        "img_path": "assets/recipe-images/zaatar_spatchcock_chicken.png",
        "summary": "Za`atar (mix rub with dried sumac, thyme, sesame seeds, etc.) with honey glazed Spatchcoocked Chicken.",
        "cooking_time":46,
        "servings":3
    }
];

export default recipeData;