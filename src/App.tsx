import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/navbar/Navbar";
import KeycloakRoute from "./routes/KeycloakRoute";
import { ROLES } from "./const/roles";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/profile"
            element={
              <KeycloakRoute role={ ROLES.User }>
                <ProfilePage />
              </KeycloakRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;