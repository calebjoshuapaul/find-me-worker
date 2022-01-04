// index.js
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});
var API_ENDPOINT = "https://api.tomtom.com/search/2/nearbySearch/.json";
async function handleRequest(event) {
  const request = event.request;
  let latitude = request.cf.latitude;
  let longitude = request.cf.longitude;
  const places = await fetchNearbyPlaces(latitude, longitude);

  const list = places.results.map(function ({ address, poi, dist }) {
    return {
      address: address.freeformAddress,
      name: poi.name,
      distance: dist,
      contact: poi.phone ? poi.phone : "No contact info found",
    };
  });
  const list2 = { latitude, longitude };
  const final = [JSON.stringify(list), JSON.stringify(list2)];
  return new Response("[" + final + "]", {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Vary: "Origin",
    },
  });
}
async function fetchNearbyPlaces(lat, long) {
  const response = fetch(
    API_ENDPOINT + `?lat=${lat}&lon=${long}&key=${API_KEY}`
  )
    .then((response2) => response2.json())
    .then((data2) => data2);
  return response;
}
