import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
