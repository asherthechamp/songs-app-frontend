"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { fetchSongsRequest } from "../../store/songs/slice";
import axios from "axios";
import axiosInstance from "@/api";

const SongForm = ({ song, onClose }) => {
  const [title, setTitle] = useState(song ? song.title : "");
  const [artist, setArtist] = useState(song ? song.artist : "");
  const [album, setAlbum] = useState(song ? song.album : "");
  const [genre, setGenre] = useState(song ? song.genre : "");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const songData = { title, artist, album, genre };

    try {
      if (song) {
        await axiosInstance.patch(`/api/songs/${song._id}`, songData);
      } else {
        await axiosInstance.post("/api/songs", songData);
      }
      dispatch(fetchSongsRequest());
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {song ? "Update Song" : "Add Song"}
      </Button>
    </form>
  );
};

export default SongForm;
