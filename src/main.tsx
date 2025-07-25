import "./globals.css";

import { createRoot } from "react-dom/client";
import Providers from "@/context/providers";
import Routes from "@/Router";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <Routes />
  </Providers>,
);
