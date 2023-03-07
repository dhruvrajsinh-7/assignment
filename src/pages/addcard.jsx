import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addcards } from "../redux/action";
const Addcard = () => {
  const [state, setstate] = useState({
    name: "",
    bucketcategory: "",
    video: "",
  });
  const dispatch = useDispatch();
  const [error, seterror] = useState("");
  const { name, bucketcategory, video } = state;
  let navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !bucketcategory || !video) {
      seterror("Please fill all the fields");
    } else {
      dispatch(addcards(state));
      navigate("/");
      seterror("");
    }
  };

  return (
    <Box
      marginTop="100px"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Button
          style={{ marginRight: "20px" }}
          variant="contained"
          color="secondary"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
        <h1>Add Card</h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <form
          className="form"
          auroComplete="off"
          onSubmit={(e) => handlesubmit(e)}
        >
          <TextField
            id="outlined-textarea"
            label="name"
            placeholder="Enter name of card "
            value={name}
            name="name"
            type="text"
            multiline
            onChange={handleChange}
          />
          <TextField
            id="outlined-textarea"
            label="Bucket"
            placeholder="Enter bucket category"
            value={bucketcategory}
            name="bucketcategory"
            type="text"
            multiline
            onChange={handleChange}
          />
          <TextField
            id="outlined-textarea"
            label="Video"
            placeholder="Enter video link"
            value={video}
            type="text"
            name="video"
            multiline
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default Addcard;
