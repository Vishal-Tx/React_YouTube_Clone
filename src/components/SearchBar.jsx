import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  return (
    <Paper
      componenet="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px soild #e3e3e3",
        pl: 2,
        boxShadow: "none",
        me: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
