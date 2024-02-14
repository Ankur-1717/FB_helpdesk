const express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();

app.use(
  cookieSession({name: "session", key: ["ankur"], maxAge:24*60*60*100})  
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin:"https://localhost:5173",
    methods:"GET,POST,PUT,DELETE",
    credentails:true
}));
const port = 5000;
app.listen(port, () => console.log('App listning to Port ' + port));