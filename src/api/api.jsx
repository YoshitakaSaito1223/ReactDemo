import { useState, useEffect } from "react";
import axios from "axios";
import NavButon from "../nav/navbutton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import "./api.scss";

export default function JokeAPI() {
  const [joke, setJoke] = useState("");
  const [fontsize, setFontsize] = useState(50);

  const apiurl = "https://official-joke-api.appspot.com/jokes/random";

  const handleGetJoke = () => {
    axios.get(apiurl).then((res) => {
      setJoke(res.data.setup + res.data.punchline);
    });
  };

  useEffect(() => {
    axios.get(apiurl).then((res) => {
      setJoke(res.data.setup + res.data.punchline);
    });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <NavButon />
      <Button variant="contained" disableElevation onClick={handleGetJoke}>
        Get New Joke
      </Button>
      <Grid sx={{ minHeight: "40vh" ,width:"80vw"}} container direction="row" justifyContent="center" alignItems="center">
          <Typography sx={{ fontSize: fontsize ,textAlign:"center"}}>
            {joke}
          </Typography>
      </Grid>
      <Slider
        size="large"
        defaultValue={fontsize}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChange={(e) => setFontsize(e.target.value)}
        sx={{ width: "30vw", minWidth: "200px" }}
      />
    </Box>
  );
}
