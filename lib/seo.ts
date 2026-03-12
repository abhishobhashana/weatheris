import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
};

const SITE_NAME = "weatheron";
const SITE_URL = "https://weatheron.vercel.app";
const DEFAULT_IMAGE = "/og-image.png";

export function createSEO({
  title,
  description,
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  keywords = [],
}: SEOProps): Metadata {
  const fullTitle = `${title} - ${SITE_NAME}`;
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),

    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImageUrl],
    },
  };
}
