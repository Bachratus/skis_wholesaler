import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <div /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
