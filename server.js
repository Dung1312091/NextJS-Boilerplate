const express = require("express");
const next = require("next");
const LRUCache = require("lru-cache");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
let cacheTime = 1000 * 60 * 60; // 1 hour
const ssrCache = new LRUCache({
  max: 100,
  maxAge: cacheTime
});
app
  .prepare()
  .then(() => {
    const server = express();
    // server.use(function(req, res, next) {
    //   console.log("Time:", Date.now());
    //   next();
    // });
    server.get("/productDetail", (req, res) => {
      const actualPage = "/productDetail";
      const queryParams = { lang: req.query.lang };
      renderAndCache(req, res, actualPage, queryParams);
    });
    server.get("/:site", (req, res) => {
      const actualPage = "/";
      const queryParams = { site: req.params.site };
      renderAndCache(req, res, actualPage, queryParams);
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`;
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}
