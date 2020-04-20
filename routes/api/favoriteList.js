const express = require("express");
const router = express.Router();
const favoriteListCtrl = require("../../controllers/favoriteList");

router.post("/", checkAuth, favoriteListCtrl.favoriteList);
router.use(require("../../config/auth"));
router.get("/", checkAuth, favoriteListCtrl.getMyfavorites);
router.post("/remove", checkAuth, favoriteListCtrl.removeFavorite);
// router.delete("/delete/:id", favoriteListCtrl.delete)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
