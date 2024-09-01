"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest } from "../../store/songs/slice";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import SongForm from "./SongForm";
import axiosInstance from "@/api";
import SongFilter from "./SongFilter";

const SongsList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.songs);
  const [open, setOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/songs/${id}`);
      dispatch(fetchSongsRequest());
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (song) => {
    setCurrentSong(song);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentSong(null);
    setOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Song
      </Button>
      <SongFilter />
      <List>
        {list.map((song) => (
          <ListItem key={song._id}>
            <ListItemText
              primary={song.title}
              secondary={`${song.artist} - ${song.album}`}
            />
            <Button onClick={() => handleEdit(song)}>Edit</Button>
            <Button onClick={() => handleDelete(song._id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentSong ? "Edit Song" : "Add Song"}</DialogTitle>
        <DialogContent>
          <SongForm song={currentSong} onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SongsList;
