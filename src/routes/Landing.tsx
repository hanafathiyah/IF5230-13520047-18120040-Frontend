import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Landing = () => {
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
            <Box sx={{ display: { md: "flex" } }}>
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
                  }}
                >
                  Manage Your Tech-Business Using AI!
                </Typography>
                <Link to="/chatbot">
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: 3,
                      width: "100%",
                      backgroundColor: "#372376",
                      ":hover": { backgroundColor: "#00CCCC" },
                    }}
                    style={{ textTransform: "none" }}
                  >
                    Manage now!
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
