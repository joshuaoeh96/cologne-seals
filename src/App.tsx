import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MitgliedWerden from "./pages/MitgliedWerden";
import UeberUns from "./pages/UeberUns";
import Training from "./pages/Training";
import KoelscheLiga from "./pages/KoelscheLiga";
import FuerVereine from "./pages/FuerVereine";
import Team from "./pages/Team";
import Partner from "./pages/Partner";
import Wettkampf from "./pages/Wettkampf";
import Merch from "./pages/Merch";
import Transparenz from "./pages/Transparenz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mitglied-werden" element={<MitgliedWerden />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/training" element={<Training />} />
          <Route path="/koelsche-liga" element={<KoelscheLiga />} />
          <Route path="/fuer-vereine" element={<FuerVereine />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/wettkampf" element={<Wettkampf />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/transparenz" element={<Transparenz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
