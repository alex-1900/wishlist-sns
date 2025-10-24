import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  APP_ENV: process.env.APP_ENV || "development",
};
