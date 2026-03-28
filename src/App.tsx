import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DocLayout from "@/components/DocLayout";
import Index from "./pages/Index";
import CoreConcepts from "./pages/CoreConcepts";
import Examples from "./pages/Examples";
import NotFound from "./pages/NotFound";

// Patterns
import ObjectModal from "./pages/patterns/ObjectModal";
import SubjectModal from "./pages/patterns/SubjectModal";
import DrawerPattern from "./pages/patterns/DrawerPattern";
import AnalysisResult from "./pages/patterns/AnalysisResult";
import AIStateBlock from "./pages/patterns/AIStateBlock";
import ActionConfirmation from "./pages/patterns/ActionConfirmation";

// System
import Orchestration from "./pages/system/Orchestration";
import StateModel from "./pages/system/StateModel";
import SignalsPage from "./pages/system/SignalsPage";
import RelationNavigation from "./pages/system/RelationNavigation";

// Interaction
import ModalOverModal from "./pages/interaction/ModalOverModal";
import DataInterpretationAction from "./pages/interaction/DataInterpretationAction";
import AIUserDecision from "./pages/interaction/AIUserDecision";
import UILayers from "./pages/interaction/UILayers";
import AILoop from "./pages/interaction/AILoop";
import NonBlocking from "./pages/interaction/NonBlocking";
import UserControlPriority from "./pages/interaction/UserControlPriority";

// Flows
import FlowModel from "./pages/flows/FlowModel";
import CreateEvent from "./pages/flows/CreateEvent";
import LinkRisk from "./pages/flows/LinkRisk";
import AnalysisFlow from "./pages/flows/AnalysisFlow";
import ApplyMeasures from "./pages/flows/ApplyMeasures";
import AIWork from "./pages/flows/AIWork";
import NavigationFlow from "./pages/flows/NavigationFlow";

// Examples
import ObjectModalDemo from "./pages/examples/ObjectModalDemo";

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
            <Route path="/examples" element={<Examples />} />

            {/* Patterns */}
            <Route path="/patterns/object-modal" element={<ObjectModal />} />
            <Route path="/patterns/subject-modal" element={<SubjectModal />} />
            <Route path="/patterns/drawer" element={<DrawerPattern />} />
            <Route path="/patterns/analysis-result" element={<AnalysisResult />} />
            <Route path="/patterns/ai-state-block" element={<AIStateBlock />} />
            <Route path="/patterns/action-confirmation" element={<ActionConfirmation />} />

            {/* System */}
            <Route path="/system/orchestration" element={<Orchestration />} />
            <Route path="/system/state-model" element={<StateModel />} />
            <Route path="/system/signals" element={<SignalsPage />} />
            <Route path="/system/relation-navigation" element={<RelationNavigation />} />

            {/* Interaction */}
            <Route path="/interaction/modal-over-modal" element={<ModalOverModal />} />
            <Route path="/interaction/data-interpretation-action" element={<DataInterpretationAction />} />
            <Route path="/interaction/ai-user-decision" element={<AIUserDecision />} />
            <Route path="/interaction/ui-layers" element={<UILayers />} />
            <Route path="/interaction/ai-loop" element={<AILoop />} />
            <Route path="/interaction/non-blocking" element={<NonBlocking />} />
            <Route path="/interaction/user-control-priority" element={<UserControlPriority />} />

            {/* Flows */}
            <Route path="/flows/flow-model" element={<FlowModel />} />
            <Route path="/flows/create-event" element={<CreateEvent />} />
            <Route path="/flows/link-risk" element={<LinkRisk />} />
            <Route path="/flows/analysis" element={<AnalysisFlow />} />
            <Route path="/flows/apply-measures" element={<ApplyMeasures />} />
            <Route path="/flows/ai-work" element={<AIWork />} />
            <Route path="/flows/navigation" element={<NavigationFlow />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </DocLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
