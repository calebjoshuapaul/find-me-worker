addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let htmlContent = "<h1> Data from request: " + request.cf + "</h1>";

  return new Response(htmlContent, {
    headers: { "content-type": "text/plain" },
  });
}
