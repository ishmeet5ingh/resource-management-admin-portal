import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Requests, Resources, Users } from "./components";
import { Home } from "./pages";
import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/resource-management-admin-portal/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="resources" element={<Resources />} />
            <Route path="requests" element={<Requests />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
