import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

import "axios";
import axios from "axios";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface IQA {
  question: string;
  answer: string;
}
const Chatbot = () => {
  const [question, setQuestion] = useState<string>("");
  // const [answer, setAnswer] = useState<string>("");
  const [arrQA, setArrQA] = useState<IQA[]>([]);

  const handleClickRegex = () => {
    if (question != "") {
      axios
        .post(
          "https://if5230-13520047-18120040-backend-ng2wnxjzcq-uc.a.run.app/chatbot_regex",
          {
            question: question,
          }
        )
        .then((response) => {
          console.log(response);
          // setAnswer(response.data);
          setArrQA([...arrQA, { question: question, answer: response.data }]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleInputQuestion = (q: string) => {
    setQuestion(q);
  };

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
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <Box>
              <Stack
                sx={{
                  marginLeft: 5,
                  marginRight: 4,
                  marginBottom: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#00CCCC",
                    marginTop: 10,
                    marginBottom: 2,
                  }}
                >
                  Chatbot (Regex)
                </Typography>
              </Stack>
              <Box
                sx={{
                  padding: 2,
                  textAlign: "center",
                  background: "#003333",
                  marginInlineStart: 0.5,
                  marginInlineEnd: 0.5,
                  height: "70vh",
                  // border: 1,
                  // borderColor: "#D499FF",
                  borderRadius: 5,
                  width: { xs: "90vw", sm: "90vw", md: "50vw", lg: "50vw" },
                }}
              >
                <Box
                  sx={{
                    padding: 1,
                    margin: 2,
                    textAlign: "center",
                    marginInlineStart: 0.5,
                    marginInlineEnd: 0.5,
                    height: "80%",
                    // border: 1,
                    // borderColor: "#D499FF",
                    borderRadius: 3,
                    overflow: "auto",
                  }}
                >
                  {arrQA.map((qa) => (
                    <Box>
                      <Box
                        sx={{
                          borderRadius: 5,
                          padding: 1,
                          width: "100%",
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#009999",
                            color: "white",
                            marginY: 1,
                            marginX: 1,
                            borderRadius: 100,
                            padding: 1,
                            width: "max-content",
                            height: "max-content",
                          }}
                        >
                          You
                        </Box>
                        <Box
                          sx={{
                            backgroundColor: "black",
                            color: "white",
                            marginY: 1,
                            borderRadius: 5,
                            padding: 1,
                            width: "max-content",
                            maxWidth: "70%",
                            minWidth: "20%",
                          }}
                        >
                          {qa.question}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          borderRadius: 5,
                          padding: 1,
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "white",
                            color: "#009999",
                            marginY: 1,
                            marginX: 1,
                            borderRadius: 100,
                            padding: 1,
                            width: "max-content",
                            height: "max-content",
                          }}
                        >
                          Bot
                        </Box>
                        <Box
                          sx={{
                            backgroundColor: "#006666",
                            color: "white",
                            marginY: 1,
                            borderRadius: 5,
                            padding: 1,
                            width: "max-content",
                            maxWidth: "70%",
                            minWidth: "20%",
                          }}
                        >
                          {qa.answer}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    margin: 2,
                    textAlign: "center",
                    background: "black",
                    marginInlineStart: 0.5,
                    marginInlineEnd: 0.5,
                    height: "auto",
                    // border: 1,
                    // borderColor: "#D499FF",
                    borderRadius: 3,
                  }}
                >
                  <Stack direction={"row"} spacing={2}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={(e) => handleInputQuestion(e.target.value)}
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-input.Mui-disabled": {
                          WebkitTextFillColor: "white",
                        },
                      }}
                      inputProps={{ style: { color: "white" } }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleClickRegex();
                        }
                      }}
                    />
                    <IconButton
                      aria-label="send"
                      size="medium"
                      onClick={handleClickRegex}
                      sx={{ color: "#EAE2E1", padding: 1 }}
                    >
                      <RiSendPlaneFill />
                    </IconButton>
                    {/* <Button
                      style={{ textTransform: "none" }}
                      onClick={handleClickRegex}
                      sx={{ color: "white" }}
                    >
                      Send
                    </Button> */}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Chatbot;
