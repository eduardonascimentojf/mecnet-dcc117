import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./ui/styles/globalStyle";

import App from "./App.tsx";
import { AuthProvider } from "./data/contexts/auth.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<GlobalStyle />
			<App />
		</AuthProvider>
	</React.StrictMode>
);
