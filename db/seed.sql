\c songs_dev;

INSERT INTO playlists (playlist_name, playlist_genre) VALUES 
('rappity rap rap', 'rap'),
('for the soul', 'r&b');

INSERT INTO songs (songName, artist, genre, is_favorite, playlist_id) VALUES
('For Certain', 'PartyNextDoor', 'r&b', true, 2),
('Family Matters', 'Drake', 'rap', true, 1),
('The heart part 6', 'Drake', 'rap', true, 1),
('Blinding Lights', 'The Weeknd', 'r&b', true, null),
('Gods Plan', 'Drake', 'rap', true, 1),
('Laugh Now Cry Later', 'Drake', 'rap', true, null),
('Loyal', 'PartyNextDoor', 'r&b', false, null),
('Crew Love', 'Drake', 'r&b', true, null),
('Passionfruit', 'Drake', 'r&b', false, 2),
('Hotline Bling', 'Drake', 'rap', false, null),
('Take Care', 'Drake', 'r&b', true, null),
('Peaches', 'Justin Bieber', 'r&b', false, null),
('The Hills', 'The Weeknd', 'r&b', true, null),
('In My Feelings', 'Drake', 'rap', false, null),
('Started from the Bottom', 'Drake', 'rap', false, 1);