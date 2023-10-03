const express = require("express");
const morgan = require("morgan");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use("/character", createProxyMiddleware({
  target: "http://character:8001",
  changeOrigin:true
}));

app.use("/film", createProxyMiddleware({
  target: "http://film:8002",
  changeOrigin:true
}));

app.use("/planet", createProxyMiddleware({
  target: "http://planet:8003",
  changeOrigin:true
}));
app.use("/database", createProxyMiddleware({
  target: "http://database:8004",
  changeOrigin:true
}));


app.listen(8000, () => {
  console.log('Gateway on port 8000')
});