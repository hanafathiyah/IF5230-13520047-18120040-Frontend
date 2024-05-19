import { useEffect, useState } from "react";

import "axios";
import axios from "axios";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import StickyHeadTable from "../component/StickyHeadTable/StickyHeadTable";

export interface IChurn {
  Churn: number;
  AccountWeeks: number;
  ContractRenewal: number;
  DataPlan: number;
  DataUsage: number;
  CustServCalls: number;
  DayMins: number;
  DayCalls: number;
  MonthlyCharge: number;
  OverageFee: number;
  RoamMins: number;
}

export interface IChurnPredict {
  AccountWeeks: number;
  ContractRenewal: number;
  DataPlan: number;
  DataUsage: number;
  CustServCalls: number;
  DayMins: number;
  DayCalls: number;
  MonthlyCharge: number;
  OverageFee: number;
  RoamMins: number;
}
const Classification = () => {
  // const [answer, setAnswer] = useState<string>("");
  const [arrChurn, setArrChurn] = useState<IChurn[]>([]);
  const [churnPredict, setChurnPredict] = useState<IChurnPredict>({
    AccountWeeks: 0,
    ContractRenewal: 0,
    DataPlan: 0,
    DataUsage: 0,
    CustServCalls: 0,
    DayMins: 0,
    DayCalls: 0,
    MonthlyCharge: 0,
    OverageFee: 0,
    RoamMins: 0,
  });

  const [resultPredict, setResultPredict] = useState<number[]>([]);

  const handleLogisticRegression = () => {
    axios
      .post("http://localhost:5000/predict_LR", {
        AccountWeeks: churnPredict.AccountWeeks,
        ContractRenewal: churnPredict.ContractRenewal,
        DataPlan: churnPredict.DataPlan,
        DataUsage: churnPredict.DataUsage,
        CustServCall: churnPredict.CustServCalls,
        DayMins: churnPredict.DayMins,
        DayCalls: churnPredict.DayCalls,
        MonthlyCharge: churnPredict.MonthlyCharge,
        OverageFee: churnPredict.OverageFee,
        RoamMins: churnPredict.RoamMins,
      })
      .then((response) => {
        console.log(response);
        setResultPredict(response.data);
        // setAnswer(response.data);
        // setArrQA([...arrQA, { question: question, answer: response.data }]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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

  useEffect(() => {
    console.log(churnPredict);
  }, [churnPredict]);
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
                    marginTop: 12,
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
                  background: "#17A5A5",
                  color: "white",
                  marginInlineStart: 0.5,
                  marginInlineEnd: 0.5,
                  height: "100%",
                  // border: 1,
                  // borderColor: "#D499FF",
                  borderRadius: 5,
                  width: { xs: "90vw", sm: "90vw", md: "50vw", lg: "50vw" },
                  marginBottom: 2,
                }}
              >
                <Box>
                  <TextField
                    label="Account Weeks"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          AccountWeeks: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                  <TextField
                    label="Contract Renewal"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          ContractRenewal: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                  <TextField
                    label="Data Plan"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          DataPlan: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                  <TextField
                    label="Data Usage"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          DataUsage: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                  <TextField
                    label="Cust Serv Calls"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          CustServCalls: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                  <TextField
                    label="Day Mins"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          DayMins: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                  <TextField
                    label="Day Calls"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          DayCalls: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />

                  <TextField
                    label="Monthly Charge"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          MonthlyCharge: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                  <TextField
                    label="Overage Fee"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          OverageFee: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                  <TextField
                    label="Roam Mins"
                    variant="filled"
                    sx={{
                      backgroundColor: "inherit",
                      borderRadius: 2,
                      margin: 1,
                    }}
                    onChange={(e) => {
                      setChurnPredict((prev: IChurnPredict) => {
                        return {
                          ...prev,
                          RoamMins: parseFloat(e.target.value),
                        };
                      });
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  onClick={handleLogisticRegression}
                  sx={{ margin: 2 }}
                >
                  Logistic Regression
                </Button>
                <Typography>
                  Hasil Prediksi: {resultPredict.toString()}
                </Typography>
              </Box>
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
