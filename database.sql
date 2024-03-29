create TABLE playlist (
    id          SERIAL          PRIMARY KEY,
    performer   VARCHAR(255)    NOT NULL,
    song        VARCHAR(255)    NOT NULL,
    genre       VARCHAR(255)    NOT NULL,
    year        INTEGER         NOT NULL
);

INSERT INTO playlist(performer, song, genre, year)
VALUES
('Led Zeppelin', 'Kashmir', 'Rock', 1975),
('Shawn Mendes & Camila Cabello', 'Senorita', 'Pop', 2019),
('Billie Eilish', 'Bad Guy', 'Alternative', 2019),
('Maroon 5', 'Sugar', 'Pop', 2014),
('Miles Davis', 'Blue in Green', 'Jazz', 1959),
('Lady Gaga', 'Shallow', 'Pop', 2018),
('Muddy Waters', 'Mannish Boy', 'Blues', 1955),
('The Kingston Trio', 'Tom Dooley', 'Folk', 1958),
('Lady Gaga', 'A Star is Born', 'Soundtrack', 2018),
('Lady Gaga', 'Stupid Love', 'Pop', 2020),
('The Kingston Trio', 'Where Have All the Flowers Gone', 'Folk', 1959),
('Ed Sheeran', 'Thinking Out Loud', 'Pop', 2014),
('The Chainsmokers & Halsey', 'Closer', 'Pop', 2016),
('Dua Lipa', 'Levitating', 'Pop', 2020),
('Justin Bieber', 'Sorry', 'Pop', 2015),
('Tones and I', 'Dance Monkey', 'Pop', 2019),
('Maroon 5', 'Moves Like Jagger', 'Pop', 2011),
('Harry Styles', 'Watermelon Sugar', 'Pop', 2020),
('Maroon 5', 'One More Night', 'Pop', 2012),
('Maroon 5', 'She Will Be Loved', 'Pop', 2004),
('Lizzo', 'Truth Hurts', 'Pop', 2019),
('Adele', 'Someone Like You', 'Pop', 2011),
('Led Zeppelin', 'Stairway to Heaven', 'Rock', 1971),
('Led Zeppelin', 'Whole Lotta Love', 'Rock', 1969),
('Rihanna', 'Umbrella', 'Pop', 2007),
('Lady Gaga', 'Poker Face', 'Pop', 2008),
('Maroon 5', 'Payphone', 'Pop', 2012),
('Led Zeppelin', 'Black Dog', 'Rock', 1971),
('Katy Perry', 'Roar', 'Pop', 2013),
('Lady Gaga', 'Paparazzi', 'Pop', 2009),
('Maroon 5', 'What Lovers Do', 'Pop', 2017),
('Justin Bieber', 'Love Yourself', 'Pop', 2015),
('Justin Bieber', 'Baby', 'Pop', 2010),
('Maroon 5', 'This Love', 'Pop', 2002),
('Black Eyed Peas', 'I Gotta Feeling', 'Pop', 2009),
('Mark Ronson ft. Bruno Mars', 'Uptown Funk', 'Pop', 2014),
('Pink', 'So What', 'Pop', 2008),
('Calvin Harris ft. Rihanna', 'We Found Love', 'Dance', 2011),
('Lil Nas X', 'Old Town Road', 'Country Rap', 2019),
('Eminem', 'Without Me', 'Hip-Hop', 2002),
('Eminem', 'Stan', 'Hip-Hop', 2000),
('Eminem', 'Lucky You', 'Hip-Hop', 2018),
('Bruno Mars', 'Just the Way You Are', 'Pop', 2010),
('Bruno Mars', 'Grenade', 'Pop', 2010),
('Maroon 5', 'Memories', 'Pop', 2019),
('Maroon 5', 'Girls Like You', 'Pop', 2018),
('Eminem', 'Lose Yourself', 'Hip-Hop', 2002),
('Led Zeppelin', 'Rock and Roll', 'Rock', 1971),
('Eminem', 'Not Afraid', 'Hip-Hop', 2010),
('Eminem', 'The Real Slim Shady', 'Hip-Hop', 2000),
('Muddy Waters', 'Got My Mojo Working', 'Blues', 1957),
('Muddy Waters', 'Rollin Stone', 'Blues', 1950),
('Eminem', 'Love the Way You Lie', 'Hip-Hop', 2010),
('Maroon 5', 'Misery', 'Pop', 2010),
('Bruno Mars', 'Locked Out of Heaven', 'Pop', 2012),
('Bruno Mars', 'Uptown Funk', 'Pop', 2014),
('Bruno Mars', '24K Magic', 'Pop', 2016),
('Bryson Tiller', 'Exchange', 'R&B', 2015),
('Lizzo', 'Cuz I Love You', 'R&B', 2019),
('Beyonce', 'Love Drought', 'R&B', 2016),
('Eminem', 'Mockingbird', 'Hip-Hop', 2004),
('Eminem', 'Rap God', 'Hip-Hop', 2013),
('Eminem', 'Killshot', 'Hip-Hop', 2018),
('Lady Gaga', 'The Edge of Glory', 'Pop', 2011),
('Lady Gaga', 'Applause', 'Pop', 2013),
('Bruno Mars', 'If I Knew', 'Pop', 2010),
('Muddy Waters', 'I Just Want To Make Love To You', 'Blues', 1954),
('Muddy Waters', 'Long Distance Call', 'Blues', 1951),
('Bruno Mars', 'The Lazy Song', 'Pop', 2011),
('Bruno Mars', 'Talking to the Moon', 'Pop', 2011),
('OutKast', 'Hey Ya!', 'Hip Hop', 2003),
('Kendrick Lamar', 'Alright', 'Hip Hop', 2015),
('Drake', 'Gods Plan', 'Hip Hop', 2018),
('Post Malone', 'Rockstar', 'Hip Hop', 2017),
('J. Cole', 'No Role Modelz', 'Hip Hop', 2014),
('Nicki Minaj', 'Anaconda', 'Hip Hop', 2014),
('Cardi B', 'Bodak Yellow', 'Hip Hop', 2017),
('Muddy Waters', 'Baby Please Dont Go', 'Blues', 1935),
('Muddy Waters', 'I Cant Be Satisfied', 'Blues', 1948),
('The Strokes', 'Juicebox', 'Rock', 2005),
('Lady Gaga', 'Just Dance', 'Pop', 2008),
('The Black Keys', 'Lonely Boy', 'Rock', 2011),
('Lady Gaga', 'Bad Romance', 'Pop', 2009),
('Lady Gaga', 'Born This Way', 'Pop', 2011),
('Muddy Waters', 'Still A Fool', 'Blues', 1950),
('Muddy Waters', 'You Shook Me', 'Blues', 1962),
('Arctic Monkeys', 'I Bet You Look Good on the Dancefloor', 'Indie Rock', 2005),
('Arctic Monkeys', 'R U Mine?', 'Indie Rock', 2012),
('Muddy Waters', 'Louisiana Blues', 'Blues', 1955),
('Tyler, The Creator', 'See You Again', 'Hip Hop', 2019),
('Kanye West', 'Heartless', 'Hip Hop', 2008),
('The Weeknd', 'Blinding Lights', 'R&B', 2020),
('Frank Ocean', 'Thinkin Bout You', 'R&B', 2012),
('Childish Gambino', 'Redbone', 'R&B', 2016),
('Tame Impala', 'The Less I Know the Better', 'Psychedelic', 2015),
('Arctic Monkeys', 'Do I Wanna Know?', 'Rock', 2013),
('The White Stripes', 'Seven Nation Army', 'Rock', 2003),
('Lady Gaga', 'Perfect Illusion', 'Pop', 2016),
('Bruno Mars', 'That’s What I Like', 'Pop', 2017),
('Bruno Mars', 'When I Was Your Man', 'Pop', 2013),
('Muddy Waters', 'Hoochie Coochie Man', 'Blues', 1954),
('Muddy Waters', 'My Home Is In The Delta', 'Blues', 1957);