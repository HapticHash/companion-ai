import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="hidden md:flex mt-16 w-24 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-24 pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
