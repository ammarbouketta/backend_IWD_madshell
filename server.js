const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
dotEnv.config();


app.use( express.static("C:/Users/dell/backend-IWD-MADShell/uploads"));
const cors = require ('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.listen(process.env.PORT, () => console.log("Connected to Server on localhost " + process.env.PORT));
app.get("/", (req, res) => {
    res.send("Server is up");
});
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

const historiqueRoutes = require('./routes/historique');
app.use('/historique', historiqueRoutes );

const fonctionRoutes = require('./routes/fonction');
app.use('/fonction', fonctionRoutes );
