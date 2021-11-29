addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  console.log(request.cf);
  let htmlContent = `<h1> Country: ${request.cf.country} </h1>`;

  return new Response(htmlContent, {
    headers: { "content-type": "text/plain" },
  });
}
