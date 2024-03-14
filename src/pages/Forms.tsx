import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
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

import { loadForms } from "../lib/api";
import { useAppSelector } from "../lib/useAppSelector";
import { setForms } from "../redux/forms";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const forms = useAppSelector(({ forms }) => forms.forms);

  useEffect(() => {
    loadForms().then((formsData) => {
      dispatch(setForms(formsData.data));
    });
  }, [dispatch]);
  
  return (
    <Box sx={{ mt: 2 }}>
      <Container>
        <TableContainer component={Paper}>
         <Typography variant="h4" sx={{ m: 1 }}>
          My Forms
         </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Address 1</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {forms.map((form) => {
                return (
                  <TableRow key={form.id}>
                    <TableCell>{form.fields.address1}</TableCell>
                    <TableCell>{form.fields.city}</TableCell>
                    <TableCell>{form.fields.state}</TableCell>
                    <TableCell>{form.fields.zip}</TableCell>
                    <TableCell>
                      <Button component={Link} to={`/forms/${form.id}`}>
                        Open
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
