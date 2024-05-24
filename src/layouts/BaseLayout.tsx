import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-row">
        <main className="basis-2/3">{children}</main>
        <Sidebar />
      </div>
    </div>
  );
};

export default BaseLayout;
