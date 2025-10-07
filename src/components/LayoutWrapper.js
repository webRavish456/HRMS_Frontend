"use client";

import { usePathname } from "next/navigation";
import Layout from "./Layout";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const noLayoutPages = ["/login"];
  const isNoLayoutPage = noLayoutPages.includes(pathname);

  return isNoLayoutPage ? children : <Layout>{children}</Layout>;
}
