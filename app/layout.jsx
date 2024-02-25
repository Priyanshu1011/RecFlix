import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Recflix | Entertainment Recommendation System",
  description: "Want some entertainment? We've got the right recommendations!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-lato py-0 px-20 bg_gradient">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
