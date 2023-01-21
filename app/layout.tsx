import "../styles/globals.css";
import Navigation from "./navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="bg-[#181818] text-[#FFFFFF] p-8">
        <main>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
