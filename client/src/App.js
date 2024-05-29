import About from "./Components/About";

import AppLayout from "./Components/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Login from "./Components/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
          {
              index: true,
              element: <Home />
          },
          {
              path: 'about',
              element: <About/>
          },
          {
              path: 'cart',
              element: <Cart/>
          },
          {
            path:'login',
            element:<Login/>
          }
      ]
  }
  ]);

  return (
    <div className="">
     
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
