const express = require('express');
const cors = require('cors');
const axios = require('axios');
const port_num = 7000;
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const getData = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data
    }
    catch (error) {
        throw new Error("failed to fetch data'", error)
    }

}
app.get("/api/getData", async (req, res) => {
    try {
        const data = await getData();
        res.send(data);
    }
    catch {
        res.status(500);
    }
})
app.post("/api/sendData", async (req, res) => {
    const receivedData = await req.body;
    console.log(receivedData)
    try {
        res.json(await { response: 'Roger that' })
    }
    catch (error) {
        console.log("Error in sending the data: ", error)
    }
})

app.post('/test', async (req, res) => {
    const { message } = await req.body;

    if (message && message.toLowerCase() === 'hello') {

        res.json(await { response: 'Hi' });
    } else {
        res.status(400).json({ error: 'Invalid message' });
    }
});

app.post('/api/item', async (req, res) => {
    try {
        const item = req.body;
        await res.json(item)

        console.log("Print bhayo")

        console.log(item)
    }
    catch (error) {
        console.error(error);
    }

})

app.listen(port_num, () => {
    console.log("Server Running on port ", port_num)
})

























