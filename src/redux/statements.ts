import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import { Statement } from "../lib/applicationTypes";
import { ThrowStatement } from "typescript";

export type StatementsSlice = {
    statements: Statement[];
};

const initialState: StatementsSlice = {
    statements: []
};

const statementsSlice = createSlice({
    name: "statements",
    initialState,
    reducers: {
        initStatements: (state, action: PayloadAction<Statement[]>) => {
            state.statements = action.payload;
        },
        addStatement: (state, action: PayloadAction<Statement>) => {
            state.statements.push(action.payload);
        },
        editStatement: (state, action: PayloadAction<Statement>) => {
            const updatedStatement = action.payload;
            const index = state.statements.findIndex((s) => s.id === updatedStatement.id);
            if (index !== -1) {
                state.statements[index] = updatedStatement;
            }
        }
    }
});

export const {
    initStatements,
    addStatement,
    editStatement,
} = statementsSlice.actions;

export const selectStatements = (({ statements }: RootState) => statements.statements);

export const selectStatementById = (({ statements }: RootState, id: string | null) => {
    return statements.statements.find((s) => s.id === id) || null;
});


export default statementsSlice;