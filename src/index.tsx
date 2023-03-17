import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initialize } from "./keycloak";
import Loading from "./components/loading/Loading";

const root = document.getElementById("root") as HTMLElement;

// Display a loading screen when connecting to Keycloak
ReactDOM.render(<Loading message="Connecting to Keycloak..." />, root);

// Initialize Keycloak
initialize()
  .then(() => { // If No Keycloak Error occurred - Display the App
    ReactDOM.render(  
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );
    
  })
  .catch(() => {
    ReactDOM.render(
      <React.StrictMode>
        <p>Could Not Connect To Keycloak.</p>
      </React.StrictMode>,
      root
    );
  });
