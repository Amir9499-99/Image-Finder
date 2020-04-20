let Favorite = require("../models/favoriteList");

module.exports = {
  favoriteList,
  getMyfavorites,
  removeFavorite,
};

async function favoriteList(req, res) {
  console.log(req.body);
  const favorite = await Favorite.findOne({ url: req.body.term.url });
  if (favorite) {
    if (favorite.user.includes(req.user._id)) {
      const favoriteList = await Favorite.find({ user: req.user._id });
      res.status(200).json(favoriteList);
    } else {
      favorite.user.push(req.user);
      await favorite.save();
      const favoriteList = await Favorite.find({ user: req.user._id });
      res.status(200).json(favoriteList);
    }
  } else {
    let newFavorite = await Favorite.create(req.body.term);
    const favoriteList = await Favorite.find({ user: req.user._id });
    res.status(200).json(favoriteList);
  }
}

async function getMyfavorites(req, res) {
  const myFavorites = await Favorite.find({ user: req.user._id });
  res.status(200).json(myFavorites);
}

async function removeFavorite(req, res) {
  const favorite = await Favorite.findById(req.body.term);
  const idx = await favorite.user.indexOf(req.user._id);
  console.log("this is favorite.user", favorite.user);
  favorite.user.splice(idx, 1);
  await favorite.save();
  console.log(favorite);
  const favoriteList = await Favorite.find({ user: req.user._id });
  res.status(200).json(favoriteList);
}
