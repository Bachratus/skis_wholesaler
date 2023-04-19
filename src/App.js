import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage, { loader as rootLoader } from "./pages/RootPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    loader: rootLoader,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
