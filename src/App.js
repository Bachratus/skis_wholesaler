import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import LoggingPage, { loader as loggingLoader } from "./pages/Logging";
import AppRoot, { loader as AppRootLoader } from "./pages/AppRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, loader: loggingLoader, element: <LoggingPage /> },
      { path: '/home', loader:AppRootLoader, element: <AppRoot/>, children:[
        { index:true, element: <HomePage /> }
      ]},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
