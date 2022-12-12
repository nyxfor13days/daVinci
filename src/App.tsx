import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
