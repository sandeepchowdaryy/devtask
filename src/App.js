import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import './App.css';
import Store from './utils/Store';
import AccountSettings from './pages/AccountSettings';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  }, {
    path: "/login",
    element: <Login />,
  }, {
    path: "/signup",
    element: <Signup />,
  }, {
    path: "/settings",
    element: <AccountSettings />,
  }
]);
function App() {
  return (
    <div className="App">
       <Provider store={Store}>
      <RouterProvider router={appRouter} />
    </Provider>
    </div>
  );
}

export default App;
