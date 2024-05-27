import { NodeContextProvider } from "@/hooks/useNodeContext";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// reusable layout wrapper to render sidebar, header and the main component
const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NodeContextProvider>
      {/* NodeContextProvider is a context provider that provides nodes and edges data */}
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <main className="basis-3/4">{children}</main>
          <Sidebar />
        </div>
      </div>
    </NodeContextProvider>
  );
};

export default BaseLayout;
