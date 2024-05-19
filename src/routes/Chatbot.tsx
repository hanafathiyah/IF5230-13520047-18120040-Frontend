import { useEffect, useState } from "react";

import "axios";
import axios from "axios";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
const Chatbot = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const handleClickRegex = () => {
    axios
      .post("http://localhost:5000/chatbot_regex", {
        question: question,
      })
      .then((response) => {
        console.log(response);
        setAnswer(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputQuestion = (q: string) => {
    setQuestion(q);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/members")
      .then((response) => {
        console.log(response.data.members);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {}, [question]);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
        sx={{ backgroundColor: "#17161D" }}
      >
        <Typography sx={{ marginBottom: 2 }}>Chatbot</Typography>
        <Stack direction={"row"} spacing={2}>
          <Box
            sx={{
              bgcolor: "white",
              padding: 2,
              borderRadius: "5%",
              margin: 2,
              border: 1,
            }}
          >
            <Typography sx={{ color: "black" }}>Chat</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handleInputQuestion(e.target.value)}
            />
            <Button onClick={handleClickRegex}>sent</Button>
            <Typography>{answer}</Typography>
          </Box>
        </Stack>
      </Grid>
    </>
  );
};

export default Chatbot;
