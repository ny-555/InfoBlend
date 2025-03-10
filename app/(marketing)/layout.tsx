// "use client";

import MainHeader from "@/components/main-header";
import SiteFooter from "@/components/site-footer";
import { marketingConfig } from "@/config/marketing";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainHeader items={marketingConfig.mainNav} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
