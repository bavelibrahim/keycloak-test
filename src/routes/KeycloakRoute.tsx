import { Navigate } from "react-router-dom";
import keycloak from "../keycloak";
import React, { ReactNode } from "react";

/**
 * Protect routes based on a given role and authenticated status of a Keycloak Session.
 * @description Default redirect is to the base path: "/"
 * @param {{ children: ReactNode, role: any, redirectTo: string }} props
 * @returns {JSX.Element}
 */
function KeycloakRoute({ children, role, redirectTo = "/" }: { children: ReactNode, role: any, redirectTo?: string }) {

  if (!keycloak.authenticated) {
    return <Navigate replace to={redirectTo} />;
  }

  if (keycloak.hasRealmRole(role)) {
    return <>{children}</>;
  }

  return <Navigate replace to={redirectTo} />;
}

export default KeycloakRoute;
