export default async function sitemap() {
  try {
    // Base sitemap links
    const sitemapLinks = [
      {
        url: "https://www.onit.services",
        changeFrequency: "yearly",
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 1,
      },
      {
        url: "https://www.onit.services/service-form",
        changeFrequency: "yearly",
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 0.8,
      },
      {
        url: "https://www.onit.services/about-us",
        changeFrequency: "yearly",
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 0.8,
      },
      {
        url: "https://www.onit.services/ac-services-noida",
        changeFrequency: "yearly",
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 0.8,
      },
      {
        url: "https://www.onit.services/ac-services-ghaziabad",
        changeFrequency: "yearly",
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 0.8,
      },
      {
        url: "https://www.onit.services/ac-services-delhi",
        changeFrequency: "yearly",
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 0.8,
      },
      {
        url: "https://www.onit.services/careers",
        changeFrequency: "yearly",
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 0.8,
      },
    ];

    return sitemapLinks;
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
