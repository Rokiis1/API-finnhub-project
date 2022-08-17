import { Schema, model } from "mongoose";
import { Logging } from "../interface/logs";

const LoggingChema = new Schema<Logging>({
  date_created: {
    type: Date,
    unmodifiable: true,
  },
  stockName: { type: String },
});

export default model<Logging>("Logging", LoggingChema);
