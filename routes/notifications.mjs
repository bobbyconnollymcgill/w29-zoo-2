import express from "express";
import { notifyFeeder } from "../services/notificationsService.mjs";
import { authorize } from "../middleware/auth.mjs";

const router = express.Router();

// send a notification to a feeder
router.post("/notifyFeeder", authorize("notify"), async (req, res) => {
  const { feedingTimeId } = req.body;
  notifyFeeder(feedingTimeId);
  res.status(202).json({ message: "Notification request received" });
});

export default router;
