# find-me-worker

find-me-worker is built using cloudflare and this worker makes an api request to api.tomtom, which sends an reponse which is then filtered.
This worker is used to show the places around you. 

- The code starts by creating an event listener for the fetch event.
- The function handleRequest is called when the fetch event occurs.
- It then creates a request object and sends it to the API endpoint with a key parameter set to "key".
- This will return all nearby places that match your search parameters.

- The code then uses this data from the response object to create two lists: one of latitude and longitude pairs, and another list of JSON objects containing information about each place in our result set.
–
- The code is a snippet of code that fetches nearby places.

- The first line of the snippet has an event listener called "fetch" which will be triggered when a request for nearby places is made.
- The event handler then calls handleRequest() function which in turn calls fetchNearbyPlaces().
