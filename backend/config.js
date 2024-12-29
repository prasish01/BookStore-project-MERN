import dotenv from "dotenv";
dotenv.config();
export const PORT = 5555;
export const DBURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yogso.mongodb.net/BooksCollection?retryWrites=true&w=majority&appName=Cluster0`;
