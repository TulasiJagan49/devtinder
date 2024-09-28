const express = require('express');

const app = express();

// We can use strings, string patterns, regex patterns
// to match the route of a method.
// : - Used to define route parameters.
// req.params - to get the params as a object
// req.query - to get the query parameters as a object
app.get("/user", (req, res) => {
    res.send([{ firstName: "John", lastName: "Wick" }]);
});

app.post("/user", (req, res) => {
    res.send("Successfully added user data to database")
})

// Use method will be called whenever the route is matched. 
app.use("/test", (req, res) => {
    res.send("Hello from test route!!!");
});

app.use("/", (req, res) => {
    res.send("Hello from the server!!!")
})

app.listen(3000, () => {
    console.log('Server is successfully listening on port 3000...')
});
