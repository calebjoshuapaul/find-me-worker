addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  console.log(request.cf || {});
  let htmlContent = `
  <!DOCTYPE html>
  <body>
  <head></head>
  <h1> Country: ${(request.cf || {}).country} </h1>
  <p> Colo: ${request.cf.colo || {}}</p>
  <p> PostalCode: ${request.cf.postalCode || {}} </p>
  </body>
  `;

  return new Response(htmlContent, {
    headers: { "content-type": "text/plain" },
  });
}
