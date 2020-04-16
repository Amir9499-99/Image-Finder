const BASE_URL = "/api/search/";

export default async function searchApi(term) {
  const results = await fetch(BASE_URL + "search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ term }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Error from Api path!");
    })
    .then((data) => console.log(data));
}
