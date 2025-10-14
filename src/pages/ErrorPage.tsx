//External libs
import { useRouteError } from "react-router-dom";
//Types
import { ErrorProps } from "../types/ErrorTypes";

function ErrorPage() {
  
  const error = useRouteError() as ErrorProps;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Error {error?.status || "Unknown"}</h1>
      <p className="text-lg text-red-500 bg-red-100 p-3 mb-2">
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>
    </div>
  );
}

export default ErrorPage;