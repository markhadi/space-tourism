import Nav from "@/components/Nav";
import "../style/globals.css";

export const metadata = {
  title: "Space Tourism",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
