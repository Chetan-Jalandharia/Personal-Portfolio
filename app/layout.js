import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Chetan Jalandharia",
  description: "Welcome to my personal portfolio! As a passionate and skilled full stack web developer, I specialize in creating robust, scalable, and user-friendly web applications using technologies like MERN stack, typescript, Next.JS, tailwind CSS and more. Explore my projects, where I combine creativity with technical expertise in both front-end and back-end development. From intuitive user interfaces to powerful server-side logic, I bring ideas to life through clean, efficient code and modern technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
