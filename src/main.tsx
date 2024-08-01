import React from "react";
import reactDom from "react-dom/client";
import { App } from "./App.tsx";

reactDom.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
