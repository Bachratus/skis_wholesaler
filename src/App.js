import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import LoggingPage, { loader as loggingLoader } from "./pages/Logging";
import AppRoot, { loader as AppRootLoader } from "./pages/AppRoot";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, loader: loggingLoader, element: <LoggingPage /> },
      { path: '/', loader:AppRootLoader, element: <AppRoot/>, children:[
        { path:'/home', element: <HomePage /> },
        { path: '/contact', element: <ContactPage />}
      ]},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
