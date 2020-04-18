import tokenService from './tokenService';
const BASE_URL = "/api/search/";

async function searchApi(term) {
  return await fetch(BASE_URL + "search", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify({ term }),
    mode: "cors",
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Error from Api path!");
    })
    .then((data) => {
      return data.data;
    });
}

export default { searchApi };
