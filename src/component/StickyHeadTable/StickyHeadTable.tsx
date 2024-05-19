import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IChurn } from "../../routes/Classification";

interface Column {
  id:
    | "churn"
    | "account weeks"
    | "contract renewal"
    | "data plan"
    | "data usage"
    | "day calls"
    | "day mins"
    | "monthly charge"
    | "overage fee"
    | "roam mins";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "churn", label: "Churn" },
  { id: "account weeks", label: "Account Weeks" },
  { id: "contract renewal", label: "Contract Renewal" },
  { id: "data plan", label: "Data Plan" },
  { id: "day calls", label: "Data Calls" },
  { id: "day mins", label: "Data Mins" },
  { id: "monthly charge", label: "Monthly Charge" },
  { id: "overage fee", label: "Overage Fee" },
  { id: "roam mins", label: "Roam Mins" },
];

interface IProps {
  data: IChurn[];
}

export default function StickyHeadTable(props: IProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // console.log(props.data);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(event);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ backgroundColor: "black", color: "white" }}
                  // style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.Churn}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.AccountWeeks}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.ContractRenewal}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.DataPlan}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.DayCalls}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.DayMins}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.MonthlyCharge}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.OverageFee}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      {row.RoamMins}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ backgroundColor: "black", color: "white" }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
