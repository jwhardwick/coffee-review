const schema = `

CREATE TABLE Coffees (
    coffeeId    INTEGER PRIMARY KEY,
    roasterId   INTEGER,
    coffeeName  TEXT,
    origin      TEXT,
    imageURL    TEXT,
    websiteURL  TEXT,
    details     TEXT,
    FOREIGN KEY (roasterId) REFERENCES Roasters(roasterId)
);

CREATE TABLE Roasters (
    roasterId   INTEGER PRIMARY KEY,
    roasterName TEXT,
    country     TEXT,
    region      TEXT,
    city        TEXT,
    imageURL    TEXT,
    websiteURL  TEXT,
    details     TEXT
);

CREATE TABLE Users (
    userId      INTEGER PRIMARY KEY,
    email       TEXT,
    password    TEXT,
    class       INTEGER,
    created     DATE
);

CREATE TABLE Reviews (
    userId      INTEGER,
    coffeeId    INTEGER,
    rating      INTEGER,
    comment     TEXT,
    created     DATE,
    PRIMARY KEY (userId, coffeeId),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (coffeeId) REFERENCES Coffees(coffeeId)
);

CREATE TABLE Favourites (
    userId      INTEGER,
    coffeeId    INTEGER,
    PRIMARY KEY (userId, coffeeId),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (coffeeId) REFERENCES Coffees(coffeeId)
);

CREATE TABLE Wishlists (
    userId      INTEGER,
    coffeeId    INTEGER,
    PRIMARY KEY (userId, coffeeId),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (coffeeId) REFERENCES Coffees(coffeeId)
);

INSERT INTO Roasters(roasterId, roasterName, country, region, city, imageURL, websiteURL, details) VALUES (NULL, 'Market Lane', 'Australia', 'Victoria', 'Melbourne', 'https://marketlane.com.au/skin/frontend/rwd/sm/images/logo.png', 'https://marketlane.com.au/', NULL);
INSERT INTO Roasters(roasterId, roasterName, country, region, city, imageURL, websiteURL, details) VALUES (NULL, 'Toby''s Estate', 'Australia', 'New South Whales', 'Sydney', 'https://www.tobysestate.com.au', 'https://res-3.cloudinary.com/scentre-group-au/image/fetch/c_pad,f_auto,q_auto/http://res.cloudinary.com/scentre-group-au/image/upload/m6jplwixj6p7ropplv86.png', NULL);

INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Market Lane'), 'Kiungu', 'Kenya', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/k/i/kiungu_bag_image_small_1.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/kiungu', 'Vibrant with grilled pineapple, berries & cooking spices');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Market Lane'), 'Minani Anastase', 'Rwanda', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/m/i/minani_anastase_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/minani-anastase', 'Juicy and sweet with raisin, orange and brown sugar.');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Market Lane'), 'La Liberdade', 'Brazil', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/l/a/la_liberdade_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/la-liberdade', 'Heavy bodied, with dark chocolate and stone fruit.');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Toby''s Estate'), 'Kenya Kamwangi AA', 'Kenya', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/specialrelease_kenya_kamwangiaa_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/kenya-kamwangi-aa.html', 'Tomato, orange candy, redcurrant');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Toby''s Estate'), 'Ethiopia Mesina', 'Ethiopia', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/specialrelease_ethiopia_mesina_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/ethiopia-mesina.html', 'Blueberry, guava, passionfruit');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Toby''s Estate'), 'Myanmar A Lel Chaung Village', 'Myanmar', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/singleorigin_myanmar_alelchaungvillage_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/myanmar-a-lel-chaung-village.html', 'Blackberry, cherry, paprika');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Market Lane'), 'Kiungu TEST', 'Kenya', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/k/i/kiungu_bag_image_small_1.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/kiungu', 'Vibrant with grilled pineapple, berries & cooking spices');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Market Lane'), 'Minani Anastase TEST', 'Rwanda', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/m/i/minani_anastase_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/minani-anastase', 'Juicy and sweet with raisin, orange and brown sugar.');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Market Lane'), 'La Liberdade TEST', 'Brazil', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/l/a/la_liberdade_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/la-liberdade', 'Heavy bodied, with dark chocolate and stone fruit.');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Toby''s Estate'), 'Kenya Kamwangi AA TEST', 'Kenya', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/specialrelease_kenya_kamwangiaa_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/kenya-kamwangi-aa.html', 'Tomato, orange candy, redcurrant');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Toby''s Estate'), 'Ethiopia Mesina TEST', 'Ethiopia', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/specialrelease_ethiopia_mesina_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/ethiopia-mesina.html', 'Blueberry, guava, passionfruit');
INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details) VALUES (NULL, (SELECT roasterId FROM Roasters WHERE roasterName = 'Toby''s Estate'), 'Myanmar A Lel Chaung Village TEST', 'Myanmar', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/singleorigin_myanmar_alelchaungvillage_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/myanmar-a-lel-chaung-village.html', 'Blackberry, cherry, paprika');

`
module.exports = schema;