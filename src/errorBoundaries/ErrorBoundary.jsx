import React from "react";
import InternalError from "../components/errorPages/InternalError";

function Fallback({ error }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <>
      <InternalError>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </InternalError>
    </>
  );
}

export default React.memo(Fallback)