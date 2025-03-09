import { Suspense } from "react";
import Menu from "./components/menu";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import "./index.less";

const App = () => {
  return (
    <div className='app'>
      <Menu />
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
