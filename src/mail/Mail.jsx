import { useState, useEffect } from "react";
import NavButon from "../nav/navbutton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Mail() {
  return (
    <>
      <NavButon></NavButon>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "80vw" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h2" align="left">
          Send Mail
        </Typography>
        <Grid container spacing={2} fullWidth>
          <Grid xs={10}>
            <TextField
              id="standard-required"
              label="Send To"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={10}>
            <TextField
              id="standard-required"
              label="CC"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={10}>
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={10}>
            <TextField
              id="outlined-multiline-flexible"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <Button variant="contained" size="large">Send</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
