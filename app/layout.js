import "./globals.css";

export const metadata = {
  title: "SHITDOGE  | Solana memecoin",
  description: "SHITDOGE is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
