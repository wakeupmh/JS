import express from "express";
const app = express();
const port = 3000;
import schema, { graphql } from "./schema";

app.get("/", (req, res) => {
    let query = `{ hello, person { name }, people { name, description } }`;
    graphql(schema, query).then(result => {
        res.json(result);
    });
});
app.listen(port, () => console.log(`Example app listening on port port!`));