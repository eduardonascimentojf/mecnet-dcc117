import { Header } from "../Header";
import { Conteiner } from "./styles";
import { Routes, Route } from "react-router-dom";
import * as P from "../../pages/index";

export function Main() {
     return (
          <Conteiner>
               <Header />

               <Routes>
                    <Route path="/" element={<P.Home />} />
                    <Route path="/clientes" element={<P.ClientList />} />
                    <Route path="/novo-cliente" element={<P.NewUser />} />
                    <Route path="/cliente/:id" element={<P.Client />} />
                    <Route
                         path="/nova-avaliacao-fisica/:id"
                         element={<P.NewPhysicalAssessment />}
                    />
                    <Route
                         path="/novo-protocolo-alimentar/:id"
                         element={<P.NewFoodProtocol />}
                    />
                    <Route
                         path="/nova-observacao/:id"
                         element={<P.NewComments />}
                    />
                     <Route
                         path="/agenda"
                         element={<P.Schedule />}
                    />
               </Routes>
          </Conteiner>
     );
}
