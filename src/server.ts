import "reflect-metadata"
import "./database";
import { router } from "../src/routes"
import express from "express";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log('server is running'));

