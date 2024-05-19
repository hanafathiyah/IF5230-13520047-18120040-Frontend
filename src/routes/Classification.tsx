import { useEffect, useState } from "react";

import "axios";
import axios from "axios";
import { Box, Grid, Stack, Typography } from "@mui/material";
import StickyHeadTable from "../component/StickyHeadTable/StickyHeadTable";

export interface IChurn {
  Churn: number;
  AccountWeeks: number;
  ContractRenewal: number;
  DataPlan: number;
  DataUsage: number;
  DayCalls: number;
  DayMins: number;
  MonthlyCharge: number;
  OverageFee: number;
  RoamMins: number;
}
const Classification = () => {
  // const [answer, setAnswer] = useState<string>("");
  const [arrChurn, setArrChurn] = useState<IChurn[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/telco")
      .then((response) => {
        // console.log(JSON.parse(response.data));
        setArrChurn(JSON.parse(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                  Classification
                </Typography>
              </Stack>
              <Box
                sx={{
                  padding: 2,
                  textAlign: "center",
                  background: "#003333",
                  marginInlineStart: 0.5,
                  marginInlineEnd: 0.5,
                  height: "100%",
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

                    // border: 1,
                    // borderColor: "#D499FF",
                    borderRadius: 3,
                    // overflow: "auto",
                  }}
                >
                  <StickyHeadTable data={arrChurn} />
                </Box>
              </Box>
              {/* {arrChurn.map((val, index) => (
                <>{val.AccountWeeks}</>
              ))} */}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Classification;
