import {Router} from 'express';

import {createUser, deleteUserById, getAllUsers, getUserById, updateUserById} from "./controllers/users.controller";
import {loginUser} from "./controllers/login.controller";
import {logoutUser} from "./controllers/logout.controller";

const usersRouter: Router = Router();

usersRouter
    .route("/")
    .get(getAllUsers)
    .post(createUser);

usersRouter
    .route("/:id")
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUserById);

usersRouter
    .route("/login")
    .post(loginUser);

usersRouter
    .route("/logout")
    .post(logoutUser);


export default usersRouter;
