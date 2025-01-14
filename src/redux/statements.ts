import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import { Statement } from "../lib/applicationTypes";

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
        }
    }
});

export const {
    initStatements,
    addStatement,
} = statementsSlice.actions;

export const selectStatements = (({ statements }: RootState) => statements.statements);


export default statementsSlice;