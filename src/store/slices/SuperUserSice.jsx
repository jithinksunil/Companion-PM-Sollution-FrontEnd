import { createSlice } from '@reduxjs/toolkit'

export const superUserSice = createSlice(
    {
        name: 'superUser',
        initialState:{ value:{} },
        reducers: {
            setSuperUser: (state,action) => {
                state.value=action.payload
            }
        }
    }
)

export const { setSuperUser } = superUserSice.actions

export default superUserSice.reducer