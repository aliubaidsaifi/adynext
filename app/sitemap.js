export default function sitemap() {
  const base = "https://adynext.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/case-studies",
    "/pricing",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
