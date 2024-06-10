import { useState, useRef } from "react";
import NavButon from "../nav/navbutton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function StopWatch() {
  const [now, setNow] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [lapTime, SetLapTime] = useState([]);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setNow(Date.now());
    setStartTime(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    SetLapTime([...lapTime, time.toFixed(2)]);
    clearInterval(intervalRef.current);
  };

  const handleLap = () => {
    SetLapTime([...lapTime, time.toFixed(2)]);
  };

  const handleClear = () => {
    SetLapTime([]);
  };

  let time = 0;
  if (startTime != null && now != null) {
    time = (now - startTime) / 1000;
  }

  return (
    <>
      <NavButon />
      <Box>
        <ButtonGroup variant="text" size="large" aria-label="Basic button group">
          <Button onClick={handleStart}>START</Button>
          <Button onClick={handleStop}>STOP</Button>
          <Button onClick={handleLap}>LAP</Button>
          <Button onClick={handleClear}>CLEAR</Button>
        </ButtonGroup>
      </Box>
      <Typography variant="h1">{time.toFixed(2)}</Typography>
      <Box>
        <List
          sx={{
            width: "100%",
            maxWidth: 500,
            position: "relative",
            overflow: "auto",
            height: 200,
            maxHeight: 200,
            borderColor:"divider",
            "& ul": { padding: 0 },
          }}
        >
          {lapTime.map((item, id) => (
            <>
              <ListItem key={item}>
                <ListItemText sx={{fontSize:"30px"}}  primary={id + 1 + " : " + item + " s"} />
              </ListItem>
              {(id+1)!==lapTime.length?<Divider component="li"/>:<></>}
            </>
          ))}
        </List>
      </Box>
    </>
  );
}
