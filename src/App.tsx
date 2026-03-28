import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DocLayout from "@/components/DocLayout";
import Index from "./pages/Index";
import CoreConcepts from "./pages/CoreConcepts";
import UXPatterns from "./pages/UXPatterns";
import InteractionModel from "./pages/InteractionModel";
import Flows from "./pages/Flows";
import Examples from "./pages/Examples";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DocLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/core-concepts" element={<CoreConcepts />} />
            <Route path="/ux-patterns" element={<UXPatterns />} />
            <Route path="/interaction-model" element={<InteractionModel />} />
            <Route path="/flows" element={<Flows />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DocLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
