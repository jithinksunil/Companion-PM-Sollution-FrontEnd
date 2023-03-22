import { configureStore } from '@reduxjs/toolkit'
import SuperUserSice from './slices/SuperUserSice'

export default configureStore({
  reducer: { 
    superUser: SuperUserSice
}
})