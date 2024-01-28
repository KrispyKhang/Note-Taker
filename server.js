const express = require("express");
const routes = require("./routes");

const app = express();

const PORT = 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(routes);

// app.listen(PORT, () =>
//   console.log(`App werking at http://localhost:${PORT}`)
// );

app.listen(PORT || 3001);
