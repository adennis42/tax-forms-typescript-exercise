import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useAppSelector } from "../lib/useAppSelector";
import { selectStatements } from "../redux/statements";


export default function MyStatements() {
    const statements = useAppSelector(selectStatements);

    return (
        <Box sx={{ mt: 2 }}>
            <Container>
                <TableContainer component={Paper}>
                    <Typography variant="h4" sx={{ m: 1 }}>
                        My Statements
                    </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Company Name</TableCell>
                                        <TableCell>Contact First Name</TableCell>
                                        <TableCell>Contact Last Name</TableCell>
                                        <TableCell>Contact Email</TableCell>
                                        <TableCell>Phone Number</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {statements?.map((statement) => (
                                        <TableRow key={statement.id}>
                                            <TableCell>{statement.name}</TableCell>
                                            <TableCell>{statement.contactInformation.firstName}</TableCell>
                                            <TableCell>{statement.contactInformation.lastName}</TableCell>
                                            <TableCell>{statement.contactInformation.email}</TableCell>
                                            <TableCell>{statement.contactInformation.phoneNumber}</TableCell>
                                            <TableCell>{statement.createdAt}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                </TableContainer>
            </Container>
        </Box>
    );
}