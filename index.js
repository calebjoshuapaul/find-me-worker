addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

const MapApiEndPoint = "https://api.tomtom.com/map/1/staticimage";

// https://api.tomtom.com/search/2/nearbySearch/.json?lat=28.479162&lon=77.311131&key=*****

const API_ENDPOINT = "https://api.tomtom.com/search/2/nearbySearch/.json";

async function handleRequest(event) {
  const request = event.request;

  let latitude = request.cf.latitude;
  let longitude = request.cf.longitude;

  const places = await fetchNearbyPlaces(latitude, longitude);
  // console.log(JSON.stringify(places.results));

  let list = places.results.map(function ({ address, poi, dist }) {
    return {
      address: address.freeformAddress,
      name: poi.name,
      distance: dist,
      contact: poi.phone ? poi.phone : "No contact info found",
    };
  });
  (list.latitude = latitude),
    (list.longitude = longitude),
    (list.mapApi = `${MapApiEndPoint}
  ?layer=basic
  &style=main
  &format=png
  &zoom=14
  &center=${data[0].longitude},${data[0].latitude}
  &width=550
  &height=350
  &view=IN
  &key=${API_KEY}`);

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
