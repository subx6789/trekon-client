"use client";
import React, { memo } from "react";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

type FooterLinkItem = {
  name?: string; // For text-based links
  link: string; // URL or route link
  logo?: string; // For icon links (optional)
};

type FooterLinkSectionProps = {
  title: string;
  items: FooterLinkItem[];
  isIconLinks?: boolean;
};

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  items,
  isIconLinks = false,
}) => (
  <div className="w-full sm:w-auto p-5">
    <h2 className="font-semibold mb-4 text-lg">{title}</h2>
    <ul className={`flex ${isIconLinks ? "flex-row gap-6" : "flex-col gap-3"}`}>
      {items.map((item, index) => (
        <li key={item.name || index}>
          <Link
            href={item.link}
            className={`text-gray-400 transition-all duration-300 ${
              isIconLinks
                ? ""
                : "hover:text-white hover:translate-x-1 inline-block"
            }`}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
          >
            {isIconLinks ? (
              <div className="transform hover:scale-110 transition-transform">
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={`${item.logo.split("/").pop()?.split(".")[0]} icon`}
                    width={24}
                    height={24}
                    className="opacity-80 hover:opacity-100"
                  />
                )}
              </div>
            ) : (
              item.name
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const footerLinks = {
    quick_links: [
      { name: "About Us", link: "/about" },
      { name: "Explore Treks", link: "/treks" },
      { name: "Terms & Conditions", link: "/terms" },
      { name: "Join as Sherpa", link: "/profile/sherpa" },
    ],
    support: [
      { name: "Safety", link: "/safety" },
      { name: "Insurance", link: "/insurance" },
      { name: "Contact Us", link: "/contact" },
    ],
    follow_us: [
      {
        logo: "/instagram.png",
        link: "https://www.instagram.com/business_trekon?utm_source=qr&igsh=MTIxcDJ3Y3ZvZHRmZA==",
      },
      {
        logo: "/twitter.png",
        link: "https://x.com/business_trekon",
      },
      {
        logo: "/youtube.png",
        link: "https://m.youtube.com/channel/UCYLm6x-gmnDfIJZ2LhTujKg",
      },
    ],
  };

  return (
    <footer className="bg-black text-white" aria-label="Site footer">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-wrap justify-between gap-10 lg:gap-16">
          <div className="flex flex-col gap-2 p-5">
            <Link
              href="/"
              className="text-xl font-bold tracking-wide hover:opacity-90 transition-opacity"
              aria-label="TrekOn Home"
            >
              TrekOn
            </Link>
            <p className="text-gray-400 text-sm">
              Where Every Step Tells a Story
            </p>
          </div>

          <FooterLinkSection
            title="Quick Links"
            items={footerLinks.quick_links}
          />
          <FooterLinkSection title="Support" items={footerLinks.support} />
          <FooterLinkSection
            title="Follow Us"
            items={footerLinks.follow_us}
            isIconLinks
          />
        </div>

        <Divider className="my-10 bg-gray-800" />

        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} TrekOn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);