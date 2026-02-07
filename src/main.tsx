import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TooltipProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TooltipProvider>
);
