import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import StatutePage from "./pages/StatutePage";
import TabsPage from "./pages/TabsPage";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div />,
    children: [
      { index: true, element: <div /> },
      { path: "/tabs", element: <div /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
