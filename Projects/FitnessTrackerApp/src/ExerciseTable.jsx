import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name = "",
  sets = 0,
  reps = 0,
  time = 0

) {
  return { name, sets, reps, time };
}

const rows = [
  createData('Greek Yogurt', "1 cup", 159, 16.0),
  createData('Chicken', "*", 237, 9.0),
  createData('Pasta', "*", 262, 16.0),
  createData('Eggs', "*", 305, 3.7),
  createData('Protein shake', "*", 356, 16.0),
];

export default function ExerciseTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Exercise</TableCell>
            <TableCell align="right">Sets</TableCell>
            <TableCell align="right">Reps</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.sets}</TableCell>
              <TableCell align="right">{row.reps}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
