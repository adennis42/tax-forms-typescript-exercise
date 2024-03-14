import React, { ComponentProps } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";

import { selectClaimedListingById } from "../redux/listings";
import { useAppSelector } from "../lib/useAppSelector";

type AppFieldProps = {
  label: string;
  name: string;

  // This line allows you to pass any styling options to the MaterialUI text
  // field that are allowed by TextField.
  sx?: ComponentProps<typeof TextField>["sx"];
}

// AppField is mostly a simple wrapper around MaterialUI's TextField, but
// hooks into Formik. Just saves us allot of typing.
const AppField: React.FC<AppFieldProps> = ({
  label,
  name,
  sx,
}) => {
  const [field] = useField(name);
  return (
    <TextField
      fullWidth
      variant="outlined"
      id={name}
      label={label}
      sx={sx}
      {...field}
    />
  );
};

export default function Listing() {
  const { id = null } = useParams();
  const listing = useAppSelector((state) => selectClaimedListingById(state, id))

  if (!listing) {
    return (
      <Box>Listing was not found!</Box>
    );
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Paper sx={{ p: 5, mt: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Request An Extension For {listing.name}
        </Typography>

        <Formik
          initialValues={listing}
          onSubmit={() => {}}
        >
          <Form>
            <AppField label="Name" name="name" />

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">
                Mailing Address
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <AppField label="Address 1" name="mailingAddress.address1" />
                </Grid>
                <Grid item xs={3}>
                  <AppField label="Address 2" name="mailingAddress.address2" />
                </Grid>
                <Grid item xs={2}>
                  <AppField label="City" name="mailingAddress.city" />
                </Grid>
                <Grid item xs={2}>
                  <AppField label="State" name="mailingAddress.state" />
                </Grid>
                <Grid item xs={2}>
                  <AppField label="Zip" name="mailingAddress.zip" />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">
                Physical Address
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <AppField label="Address 1" name="physicalAddress.address1" />
                </Grid>
                <Grid item xs={3}>
                  <AppField label="Address 2" name="physicalAddress.address2" />
                </Grid>
                <Grid item xs={2}>
                  <AppField label="City" name="physicalAddress.city" />
                </Grid>
                <Grid item xs={2}>
                  <AppField label="State" name="physicalAddress.state" />
                </Grid>
                <Grid item xs={2}>
                  <AppField label="Zip" name="physicalAddress.zip" />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Button variant="contained" type="submit">
                Submit Request
              </Button>
            </Box>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
}
