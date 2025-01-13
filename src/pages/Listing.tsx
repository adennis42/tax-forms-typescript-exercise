import React, { ComponentProps } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { selectClaimedListingById } from "../redux/listings";
import { useAppSelector } from "../lib/useAppSelector";
import { Submission } from "../lib/applicationTypes";
import { requestExtension } from "../lib/api";
import { addSubmission } from "../redux/submissions";


type AppFieldProps = {
  label: string;
  name: string;

  // This line allows you to pass any styling options to the MaterialUI text
  // field that are allowed by TextField.
  sx?: ComponentProps<typeof TextField>["sx"];
}

type TextAreaFieldProps = {
  label: string;
  name: string;
  error: boolean;
  helperText?: string;
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
  const value = field.value || "";

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

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  error,
  sx,
  helperText,
}) => {
  const [field] = useField(name);
  const value = field.value || "";

  return (
    <TextField
      fullWidth
      multiline
      rows={4}
      variant="outlined"
      id={name}
      label={label}
      sx={sx}
      error={error}
      helperText={helperText}
      {...field}
    />
  );
}

const validationSchema = Yup.object({
  reason: Yup.string().required("Please provide a reason for the extension."),
});

export default function Listing() {
  const { id = null } = useParams();
  const listing = useAppSelector((state) => selectClaimedListingById(state, id))
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!listing) {
    return (
      <Box>Listing was not found!</Box>
    );
  }

  const initialValues: Submission = {
    listing,
  };

  const handleSubmit = async (values: Submission) => { 
    try {
      const response = await requestExtension(values);
      console.log("Response", response);
      dispatch(addSubmission(response));
      navigate("/submissions");
    } catch (error) {
      console.error("Failed to submit extension request", error);
    }
    
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Paper sx={{ p: 5, mt: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Request An Extension For {listing.name}
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ errors,  handleSubmit }) => (
            <Form onSubmit={handleSubmit} noValidate>
              <AppField label="Name" name="listing.name" />

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6">
                  Mailing Address
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <AppField
                      label="Address 1"
                      name="listing.mailingAddress.address1" />
                  </Grid>
                  <Grid item xs={3}>
                    <AppField
                      label="Address 2"
                      name="listing.mailingAddress.address2"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <AppField
                      label="City"
                      name="listing.mailingAddress.city"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <AppField
                      label="State"
                      name="listing.mailingAddress.state"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <AppField
                      label="Zip"
                      name="listing.mailingAddress.zip"
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6">
                  Physical Address
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <AppField
                      label="Address 1"
                      name="listing.physicalAddress.address1"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <AppField
                      label="Address 2"
                      name="listing.physicalAddress.address2"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <AppField
                      label="City"
                      name="listing.physicalAddress.city"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <AppField
                      label="State"
                      name="listing.physicalAddress.state"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <AppField
                      label="Zip"
                      name="listing.physicalAddress.zip"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6">
                  Reason for Extension
                </Typography>
                <TextAreaField
                  label="Reason"
                  name="reason"
                  sx={{ width: "100%" }}
                  error={Boolean(errors.reason)}
                  helperText={errors.reason}
                  />
              </Box>

              <Box sx={{ mt: 3 }}>
                <Button variant="contained" type="submit">
                  Submit Request
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
