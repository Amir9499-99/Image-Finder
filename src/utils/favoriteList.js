import tokenService from "./tokenService";
const BASE_URL = "/api/favoriteList/";

async function favoriteDataList(term) {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify({ term }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}


async function getMyfavorites() {
  return await fetch(BASE_URL, {
    method: "GET",
    headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + tokenService.getToken(),
    },
  })
  .then((res) => res.json())
}

export default {
  favoriteDataList,
  getMyfavorites
};
