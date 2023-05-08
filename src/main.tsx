import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./ui/styles/globalStyle";

import App from "./App.tsx";
import { AuthProvider } from "./data/contexts/auth.tsx";
import { ProductProvider } from "./data/contexts/product.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <GlobalStyle />
        <App />
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
