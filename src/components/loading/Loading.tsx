import React from "react";

function Loading(props: { message?: string | undefined; }) {
  const { message = "Loading" } = props;
  return <p>{message}</p>;
}

// Interface

export default Loading;