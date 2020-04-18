const API = "https://wallhaven.cc/api/v1/search?q=";
const params = "&categories=111&purity=110&sorting=relevance&order=desc&page=1";
const fetch = require("node-fetch");

module.exports = {
  search,
};

function search(req, res) {
  console.log(req.body.term);
  fetch(API + req.body.term + params)
    .then((res) => res.json())
    .then((data) => {
      // console.log("this is data", data);
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
}
