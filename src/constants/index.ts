import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "GIỚI THIỆU", href: "#hero" },
  { label: "THÔNG TIN", href: "#about" },
  { label: "HÌNH ẢNH", href: "#nexus" },
  { label: "HOẠT ĐỘNG", href: "#story" },
  { label: "LIÊN HỆ", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://discord.com",
    icon: FaDiscord,
  },
  {
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://twitch.com",
    icon: FaTwitch,
  },
] as const;
