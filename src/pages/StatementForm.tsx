import React, { ComponentProps } from "react";
import { Form, useNavigate } from "react-router-dom";

import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Formik, useField } from "formik";
import * as Yup from "yup";

import { createStatement } from "../lib/api";
import { addStatement } from "../redux/statements";
import { useDispatch } from "react-redux";

type AppFieldProps = {
    label: string;
    name: string;
    sx?: ComponentProps<typeof TextField>["sx"];
    error?: boolean;
    helperText?: string;
};

const AppField: React.FC<AppFieldProps> = ({
    label,
    name,
    sx,
    error,
    helperText,
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
            error={error}
            helperText={helperText}
            {...field}
        />
    );
}

const validationSchema = Yup.object({
    name: Yup.string().required("Company Name is required"),
});

export default function StatementForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        contactInformation: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
        },
    };

    const handleSubmit = async (values: any) => {
        try {
            const response = await createStatement(values);
            dispatch(addStatement(response));
            navigate("/statements");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Container sx={{ mt: 2 }}>
            <Paper sx={{ p: 5, mt: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Create A Statement
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values);
                        setSubmitting(false);
                    }}
                >
                    {({ errors, handleSubmit }) => (
                        <Form onSubmit={handleSubmit} noValidate>
                            <AppField
                                label="Company Name"
                                name="name"
                                error={Boolean(errors.name)}
                                helperText={errors.name}
                            />
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="h6">
                                    Contact Information
                                </Typography>
                                <Grid container spacing={1} sx={{ mb: 2 }}>
                                    <Grid item xs={6}>
                                        <AppField label="First Name" name="contactInformation.firstName" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <AppField label="Last Name" name="contactInformation.lastName" />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <AppField label="Email" name="contactInformation.email" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <AppField label="Phone Number" name="contactInformation.phoneNumber" />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Button variant="contained" type="submit">
                                    Create Statement
                                </Button>
                            </Box>
                        </Form>

                    )}
                </Formik>
            </Paper>
        </Container>
    );
}