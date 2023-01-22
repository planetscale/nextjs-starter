import "../styles/globals.css";
import Navigation from "./navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="bg-[#181818] text-[#FFFFFF] flex flex-col items-center pt-7">
        <main className="w-3/5">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
