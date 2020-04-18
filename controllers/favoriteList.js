let Favorite = require("../models/favoriteList");

module.exports = {
  favoriteList,
  // show,
  getMyfavorites
  // delete: deleteOne
};

async function favoriteList(req, res) {
  const favorite = await Favorite.findOne({ url: req.body.term.url });
  if (favorite) {
    favorite.user.push(req.user);
    await favorite.save();
    const favoriteList = await Favorite.find({ user: req.user._id });
    res.status(200).json(favoriteList);
  } else {
    let newFavorite = await Favorite.create(req.body.term);
    newFavorite.user.push(req.user);
    await newFavorite.save();
    res.status(200).json(favoriteList);
  }
}

// async function show(req, res) {
//   const favoriteList = await Favorite.find({ user: req.user._id });
//   res.status(200).json(favoriteList);
//   console.log(favoriteList);
// }

async function getMyfavorites(req, res) {
  const myFavorites = await Favorite.find({ user: req.user._id });
  res.status(200).json(myFavorites);
}

// async function deleteOne(req, res) {
//   let deleteFavorite = await Favorite.findByIdAndRemove(req.params.id);
//   res.status(200).json(deleteFavorite)
// }
