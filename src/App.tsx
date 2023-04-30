import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./data/contexts/auth";
import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import * as P from "./pages/index";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {user ? (
        <Routes>
          <Route path="/" element={<P.Home />} />
          <Route path="/produtos" element={<P.Produtos />} />
          <Route path="/pedidos" element={<P.Pedidos />} />
          <Route path="/estoque" element={<P.Estoque />} />
          <Route path="/vendas" element={<P.Vendas />} />
          <Route path="/funcionarios" element={<P.Funcionarios />} />
        </Routes>
      ) : (
        <>
          <Login />
        </>
      )}
      {/* <SiderBar /> */}
    </BrowserRouter>
  );
}

export default App;
