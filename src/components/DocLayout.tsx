import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const DocLayout = ({ children }: { children: ReactNode }) => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-12 flex items-center border-b border-border px-4">
          <SidebarTrigger />
        </header>
        <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  </SidebarProvider>
);

export default DocLayout;
