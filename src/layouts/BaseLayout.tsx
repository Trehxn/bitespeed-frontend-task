import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <main className="basis-2/3 p-4">{children}</main>
        <Sidebar />
      </div>
    </div>
  );
};

export default BaseLayout;
