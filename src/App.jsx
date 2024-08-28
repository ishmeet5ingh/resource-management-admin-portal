import { HashRouter, Routes, Route } from "react-router-dom";
import { Header, Requests, Resources, Users } from "./components";
import { AddResourceItem, Home, Login } from "./pages";
import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <HashRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="resources" element={<Resources />} />
            <Route path="requests" element={<Requests />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/add-resource-item" element={<AddResourceItem/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
