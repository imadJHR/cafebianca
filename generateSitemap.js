import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const BASE_URL = "https://labrioche.netlify.app"; // Remplace par ton domaine

// Détermine le bon chemin du fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sitemapPath = `${__dirname}/public/sitemap.xml`;

const pages = [
  "/", 
  "/menu",
  "/notre-equipe",
  "/contactez-nous",
  "/réservez",
  "/panier",
  "/confirmation",
  "/plat-du-jour",
  "/checkout"
];

// Créer le flux de sitemap
const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream(sitemapPath);

// Écrire dans le fichier sitemap.xml
sitemap.pipe(writeStream);

pages.forEach((page) => {
  sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("✅ Sitemap generated successfully!");
}).catch((err) => {
  console.error("❌ Error generating sitemap:", err);
});
