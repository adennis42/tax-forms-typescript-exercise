import React from "react";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Submission } from "../lib/applicationTypes";

export default function Submissions() {
  const submissions: Submission[] = [];

  return (
    <Box sx={{ mt: 2 }}>
      <Container>
        <TableContainer component={Paper}>
         <Typography variant="h4" sx={{ m: 1 }}>
          My Submissions
         </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Submitted At</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {submissions.map((submission) => null)}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
