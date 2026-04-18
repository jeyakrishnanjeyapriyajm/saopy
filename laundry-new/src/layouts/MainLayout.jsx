import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-[88px]">{children}</main>
    </div>
  );
}
