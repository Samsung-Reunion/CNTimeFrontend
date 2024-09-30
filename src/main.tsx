import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StateProvider } from "./StateContext";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StateProvider>
    <BrowserRouter>
      <App />
      <Toaster
        containerStyle={{ fontSize: "16px", fontWeight: "600" }}
        toastOptions={{
          style: {
            padding: "7px",
            color: "#242424",
            borderRadius: "999px",
            fontSize: "13px",
          },
        }}
      />
    </BrowserRouter>
  </StateProvider>
);
