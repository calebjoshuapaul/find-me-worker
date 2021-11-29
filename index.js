const dotenv = require("dotenv");

console.log(process.env.HELLO);

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const request = event.request;
  const res = JSON.stringify(request.cf.city);

  ("Delhi");

  return new Response(res, {
    headers: { "content-type": "text/plain" },
  });
}
