USE food_truck_db;

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("American Meltdown", "American", "The Orchard", "www.americanmeltdown.org", "AmericanMLTDWN", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Only Burger", "Burgers", "The Carolina Burger", "www.onlyburger.com", "onlyburger", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Sympathy for the Deli", "Sandwiches", "Rosemary-Mustard Chicken", "www.sympathyforthedeli.com", "Sympathy4Deli", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Bulkogi", "Korean BBQ", "Korean BBQ Burrito", "www.bulkogikrnbbq.com", "NCBulkogi", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Pie Pushers", "Pizza", "The Wiley Willey", "www.piepushers.com", "piepushers", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Test Truck 1", "Food", "Good Food", "www.test.com", "test", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Test Truck 2", "Food", "Good Food", "www.test.com", "test", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Test Truck 3", "Food", "Good Food", "www.test.com", "test", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Test Truck 4", "Food", "Good Food", "www.test.com", "test", "2017-06-09");

INSERT INTO Foodtrucks (name, food_type, popular_item, website, twitter_handle, created_at)
VALUES ("Test Truck 5", "Food", "Good Food", "www.test.com", "test", "2017-06-09");

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

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (0, "American Meltdown", "2017-06-11", "2017-06-11", 1);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (3.2, "Only Burger", "2017-06-11", "2017-06-11", 2);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (0, "Sympathy for the Deli", "2017-06-11", "2017-06-11", 3);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (3.4, "Bulkogi", "2017-06-11", "2017-06-11", 4);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (0, "Pie Pushers", "2017-06-11", "2017-06-11", 5);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (2, "Test Truck 1", "2017-06-11", "2017-06-11", 6);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (4.5, "Test Truck 2", "2017-06-11", "2017-06-11", 7);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (3, "Test Truck 3", "2017-06-11", "2017-06-11", 8);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (2.3, "Test Truck 4", "2017-06-11", "2017-06-11", 9);

INSERT INTO Ratings (current_rating, truck_name, createdAt, updatedAt, FoodtruckId)
VALUES (3.9, "Test Truck 5", "2017-06-11", "2017-06-11", 10);