// components/SongFilter.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { setFilter, fetchSongsRequest } from "../../store/songs/slice";

const SongFilter = () => {
  const [filter, setFilterState] = useState("");
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    setFilterState(e.target.value);
  };

  const handleFilterSubmit = () => {
    dispatch(setFilter(filter));
    dispatch(fetchSongsRequest());
  };

  const handleShowAll = () => {
    setFilterState("");
    dispatch(setFilter(""));
    dispatch(fetchSongsRequest());
  };

  return (
    <div className="flex flex-row">
      <TextField
        label="Filter"
        value={filter}
        onChange={handleFilterChange}
        margin="normal"
      />
      <Button
        onClick={handleFilterSubmit}
        variant="contained"
        color="primary"
        className="m-4"
      >
        Apply Filter
      </Button>
      <Button
        onClick={handleShowAll}
        variant="contained"
        color="secondary"
        style={{ marginLeft: "10px" }}
        className="m-4"
      >
        Show All
      </Button>
    </div>
  );
};

export default SongFilter;
