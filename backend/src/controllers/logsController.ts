import { Request, Response } from "express";
import Logging from "../model/logsModel";

export const createNewLog = async (req: Request, res: Response) => {
  const newLog = await Logging.create(req.body);
  try {
    return res.status(201).json(newLog);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: error,
    });
  }
};

export const getAllLogs = async (req: Request, res: Response) => {
  const allLogs = await Logging.find();
  try {
    return res.status(201).json(allLogs);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
