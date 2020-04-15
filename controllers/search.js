const fetch = require("node-fetch");

module.exports = {
  search,
};

async function search(req, res) {
  res.send("This is" + req.body);
  // fetch(API + this.state.searchResult + params)
  //     .then((res) => {
  //       if (res.ok) return res.json()
  //       throw new Error("Bad Call")})
  //     .then((data) => console.log(data));
}
