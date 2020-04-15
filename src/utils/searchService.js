const BASE_URL = "/api/search/";

export default async function searchApi(term) {
    console.log('Hitting servise' + term)
  return (
    fetch(BASE_URL + "search", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(term),
    })
    
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Error from Api path!");
      })
  );
}

