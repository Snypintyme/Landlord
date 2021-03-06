const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();
const DIST_DIR = path.join(__dirname, '/dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
app.use("/src/assets/cards", express.static(__dirname + "/src/assets/cards"));
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {

});
