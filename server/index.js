import { config } from "dotenv";
import { Configuration, OpenAIApi } from 'openai';
import express from 'express';
import cors from 'cors';

const server = express();
config()

server.use(express.urlencoded({ extended: false }));
server.use(express.json())
server.use(cors());
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.API_URL }))

server.post("/data", (req, resp) => {
    const ques = JSON.parse(req.body.body);
    const { data } = ques
    console.log(ques.data)
    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: data }]
    }).then(res => {
        resp.end(JSON.stringify(res.data.choices[0].message.content))
    }).catch(err => {
        resp.send(err.message)
    })
})

server.listen(5050, () => {
    console.log("server is running")
})



