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
  }).then((res) => res.json());
}

async function removeFavorite(term) {
  return await fetch(BASE_URL + "remove", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify({ term }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Bad to call to remove favorite");
    })
    .then((data) => {
      console.log("this is res", data);
      return data;
    });
}

export default {
  favoriteDataList,
  getMyfavorites,
  removeFavorite,
};
