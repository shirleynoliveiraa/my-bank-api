import express from "express";
import { createAccount, getAccount, getIdAccount, deleteAccount, updateAccount, updateBalanceAccount, errorLog } from "../controller/myBankApiController.js"

const router = express.Router();

router.post("/", createAccount);
router.get("/", getAccount);
router.get("/:id", getIdAccount);
router.delete("/:id", deleteAccount);
router.put("/", updateAccount);
router.patch("/updateBalance", updateBalanceAccount);
router.use(errorLog);

export default router;