addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

// https://api.tomtom.com/search/2/nearbySearch/.json?lat=28.479162&lon=77.311131&key=*****

const API_ENDPOINT = "https://api.tomtom.com/search/2/nearbySearch/.json";

async function handleRequest(event) {
  const request = event.request;

  let latitude = request.cf.latitude;
  let longitude = request.cf.longitude;

  const places = await fetchNearbyPlaces(latitude, longitude);
  // console.log(JSON.stringify(places.results));

  const list = places.results.map(function ({ address, poi, dist }) {
    return {
      address: address.freeformAddress,
      name: poi.name,
      distance: dist,
      contact: poi.phone ? poi.phone : "No contact info found",
    };
  });
  const result = JSON.stringify(list);

  return new Response(result, {
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
    .then((response) => response.json())
    .then((data) => data);
  return response;
}
