
--- CREATE DATABASE dn_name
--- CREATE TABLE table_name
--- SELECT * from table_name;
--- SELECT * FROM table_name WHERE value = 30;

--- Creating the database
CREATE DATABASE djbbq;

--- Creating the table
CREATE TABLE recipes (
    recipe_id SERIAL,
    recipe varchar NOT NULL UNIQUE,
    video_url varchar NOT NULL UNIQUE,
    img_path varchar NOT NULL UNIQUE,
    summary varchar NOT NULL,
    cooking_time integer NOT NULL,
    servings integer NOT NULL,
    PRIMARY KEY(recipe_id) 
);

--- inserting into the table
INSERT INTO recipes (recipe, video_url, img_path, summary, cooking_time, servings) 
VALUES ('Za`atar and Honey Glazed Spatchcock Chicken', 'https://www.youtube.com/watch?v=9rgDcS7JU-k', 'assets/recipe-images/zaatar_spatchcock_chicken.png', 'Za`atar (mix rub with dried sumac, thyme, sesame seeds, etc.) with honey glazed Spatchcoocked Chicken.', 46, 3);


-- NEXT STEP
CREATE TABLE food_groups (
    food_id SERIAL,
    food_name varchar NOT NULL,
    PRIMARY KEY(food_id)
);

-- NEXT STEP
CREATE TABLE recipes_bridge_categories (
    recipe_id integer REFERENCES recipes(recipe_id),
    food_id integer REFERENCES food_groups(food_id),
    PRIMARY KEY(recipe_id, food_id)
);

--- to determine if a column has been designated correctly as a primary or foreign key
SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'recipes';

INSERT INTO recipes (recipe, video_url, img_path, summary, cooking_time, servings) VALUES (
  "Bacon Love Bombs", 
  "https://www.youtube.com/watch?v=Qg1Mymg7-w8", 
  "assets/recipe-images/bacon_bombs.png", 
  "Pork shoulder, wrapped in bacon, vegetables and spices by choice, chilies for heat, planet-DAMN bbq sauce.", 
  "37", 
  "2");


