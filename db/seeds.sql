USE food_truck_db;

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, createdAt, updatedAt)
VALUES ("American Meltdown", "American", "The Orchard", "www.americanmeltdown.org", "AmericanMLTDWN", "2017-06-09", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, current_rating, total_ratings, createdAt, updatedAt)
VALUES ("Only Burger", "Burgers", "The Carolina Burger", "www.onlyburger.com", "onlyburger", 3.2, 5, "2017-06-09", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, createdAt, updatedAt)
VALUES ("Sympathy for the Deli", "Sandwiches", "Rosemary-Mustard Chicken", "www.sympathyforthedeli.com", "Sympathy4Deli", "2017-06-09", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, current_rating, total_ratings, createdAt, updatedAt)
VALUES ("Bulkogi", "Korean BBQ", "Korean BBQ Burrito", "www.bulkogikrnbbq.com", "NCBulkogi", 3.4, 5, "2017-06-09", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, createdAt, updatedAt)
VALUES ("Pie Pushers", "Pizza", "The Wiley Willey", "www.piepushers.com", "piepushers", "2017-06-09", "2017-06-09");

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Ann", 4, "tacos", "Totally awesome", "2017-06-11", 2);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Bill", 3, "tacos", "Totally sucks", "2017-06-11", 2);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Connor", 5, "tacos", "Covfefe!", "2017-06-11", 2);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Darrel", 2, "tacos", "I've had better", "2017-06-11", 2);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Erin", 2, "tacos", "Is this even worth it?", "2017-06-11", 2);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Frank", 3, "tacos", "Totally okay", "2017-06-11", 4);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Greg", 4, "tacos", "Covfefe!", "2017-06-11", 4);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Hal", 2, "tacos", "I've had better", "2017-06-11", 4);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Isabelle", 5, "tacos", "Totally awesome", "2017-06-11", 4);

INSERT INTO Reviews (user_name, rating, fav_food, review, created_at, FoodtruckId)
VALUES ("Jim", 3, "tacos", "So so", "2017-06-11", 4);