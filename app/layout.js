import "../style/globals.css";

export const metadata = {
  title: "Space Tourism",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
