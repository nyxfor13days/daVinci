import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
