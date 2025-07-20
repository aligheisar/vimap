import { createRoot } from "react-dom/client";
import "./globals.css";
import Routes from "@/Router";

createRoot(document.getElementById("root")!).render(<Routes />);
