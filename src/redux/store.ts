import {configureStore} from '@reduxjs/toolkit'
import reducer from "../redux/rootReducers";
import createSagaMiddleware from "redux-saga"
import rootSaga from "../saga/rootSaga"

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
