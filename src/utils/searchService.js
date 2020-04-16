const BASE_URL = "/api/search/";

async function searchApi(term) {
  return await fetch(BASE_URL + "search", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ term }),
    mode: "cors",
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Error from Api path!");
    })
    .then((data) => {
      console.log(data.data);
      return data.data;
    });
}

export default { searchApi };
