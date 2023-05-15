import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./data/contexts/auth";

import { Login } from "./pages/Login";
import * as P from "./pages/index";
import { ToastContainer } from "react-toastify";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {user ? (
        <>
          <Routes>
            <Route path="/" element={<P.Home />} id="route" />
            <Route path="/produtos" element={<P.Produtos />} />
            <Route path="/pedidos" element={<P.Pedidos />} />
            <Route path="/estoque" element={<P.Estoque />} />
            <Route path="/estoque/:produtoID" element={<P.ProdutoEstoque />} />
            <Route path="/vendas" element={<P.Vendas />} />
            <Route
              path="estoque/historico-pedidos"
              element={<P.HistoricoPedidos />}
            />
            <Route
              path="vendas/historico-vendas"
              element={<P.HistoricoVendas />}
            />
            <Route
              path="/funcionarios"
              element={<P.Funcionarios />}
              id="route"
            />
          </Routes>
          <div className="notification">
            <ToastContainer />
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
