import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CounterProvider } from "./context/CounterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
