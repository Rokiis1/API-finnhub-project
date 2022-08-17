import { Router } from "express";
import { createNewLog, getAllLogs } from "../controllers/logsController";

const router: Router = Router();

router.post("/newLog", createNewLog);
router.get("/allLogs", getAllLogs);

export default router;
