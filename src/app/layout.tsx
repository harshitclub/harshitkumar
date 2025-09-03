import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const Cascadia = localFont({
  src: [
    {
      path: "../fonts/Cascadia/CascadiaCode-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../fonts/Cascadia/CascadiaCode-Light.ttf",
      weight: "300",
    },
    {
      path: "../fonts/Cascadia/CascadiaCode-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Cascadia/CascadiaCode-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Cascadia/CascadiaCode-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/Cascadia/CascadiaCode-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-cascadia",
});

const siteUrl = "https://www.harshitclub.com";

export const metadata: Metadata = {
  title: "Harshit Kumar - Full Stack Developer",
  description:
    "I am a versatile Full Stack Developer with years of experience designing and building highly scalable web and mobile applications. I specialize in crafting seamless frontend experiences using React.js and Next.js, while architecting optimized backend systems with Node.js, Golang, and microservices.",
  keywords: [
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Golang",
    "Microservices",
    "REST APIs",
    "Real-time Applications",
    "Event-driven Architecture",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Flutter",
    "Cross-platform Mobile Apps",
    "AWS Deployment",
    "Docker",
    "S3",
    "CloudFront",
    "Scalable Web Applications",
    "Scalable Mobile Applications",
    "Backend Architecture",
    "Frontend Development",
    "Performance Optimization",
    "Software Development",
    "End-to-End Solutions",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Production-ready Applications",
  ],
  creator: "Harshit Kumar",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_us",
    url: siteUrl,
    title: "Harshit Kumar - Full Stack Developer",
    description:
      "I am a versatile Full Stack Developer with years of experience designing and building highly scalable web and mobile applications. I specialize in crafting seamless frontend experiences using React.js and Next.js, while architecting optimized backend systems with Node.js, Golang, and microservices.",
    siteName: "Harshit Kumar",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "harshitclub promotional banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Kumar - Full Stack Developer",
    description:
      "I am a versatile Full Stack Developer with years of experience designing and building highly scalable web and mobile applications. I specialize in crafting seamless frontend experiences using React.js and Next.js, while architecting optimized backend systems with Node.js, Golang, and microservices.",
    creator: "@harshitclub", // Corrected Twitter handle
    images: [`${siteUrl}/opengraph-image.png`], // Use absolute URL
  },
  other: {
    "script[type='application/ld+json']": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Harshit Kumar",
      url: siteUrl,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-750-5394360", // Add your contact number
        contactType: "contact number",
      },
      sameAs: [
        "https://www.linkedin.com/in/harshitclub/",
        "https://instagram.com/harshitclub",
        "https://facebook.com/theharshitclub",
        "https://twitter.com/harshitclub",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Cascadia.variable} antialiased p-4`}>{children}</body>
    </html>
  );
}
