const API = "https://wallhaven.cc/search?q=";
const params = "&categories=111&purity=110&sorting=relevance&order=desc&page=1";
const fetch = require("node-fetch");

module.exports = {
  search,
};

async function search(req, res) {
  console.log(req.body.term);
  fetch(API + req.body.term + params)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Bad Call");
    })
    .then((data) => {
      console.log(data);
      res.json({ data });
    });
}
