import {Router} from 'express';
import {mongoDbStatus, serverStatus} from "./controllers/status.controller";

const statusRouter: Router = Router();

statusRouter
    .route("/server")
    .get(serverStatus);

statusRouter
    .route("/mongodb")
    .get(mongoDbStatus);

export default statusRouter;
