DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    playlist_name VARCHAR(20) NOT NULL,
    playlist_genre VARCHAR(20)
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    songname TEXT NOT NULL,
    artist TEXT NOT NULL,
    genre VARCHAR(20),
    is_favorite BOOLEAN DEFAULT false NOT NULL,
    album TEXT,
    playlist_id INT REFERENCES playlists (id) ON DELETE SET NULL
);

