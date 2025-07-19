import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});
export const metadata = {
  title: "Zefaza - Smart Commerce for Smart Cities | Coming Soon",
  description: "Zefaza is revolutionizing hyperlocal commerce. Connect with trusted sellers, essential services, and experiences in your area. Join our waitlist for early access.",
  keywords: "hyperlocal commerce, smart cities, pre-launch, marketplace, local services",
  authors: [{
    name: "Zefaza Industries Pvt. Ltd."
  }],
  viewport: "width=device-width, initial-scale=1"
};
export default function RootLayout({
  children
}) {
  return <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>;
}