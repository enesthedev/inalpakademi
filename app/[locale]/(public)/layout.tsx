import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { getSettings } from "@/app/actions/settings";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  return (
    <>
      <Navbar settings={settings} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
