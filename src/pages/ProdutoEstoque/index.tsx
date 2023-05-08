/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation, useParams } from "react-router-dom";
import { BsBasket, BsCart2 } from "react-icons/bs";
import Modal from "react-modal";
import { useProduct } from "../../data/contexts/product";
import { CheckboxToggle } from "../../ui/styles/checkboxToggle";
import { Button } from "../../ui/components/Button";
import { ModalAutomatic, propsSettingsAuto } from "./ModalAutomatic";
import { useAuth } from "../../data/contexts/auth";

export function ProdutoEstoque() {
  const params = useParams();
  const location = useLocation();
  const { pathname } = location;
  const { product, getProductById } = useProduct();
  const { user } = useAuth();
  const splitLocation = pathname.split("/");
  const [editAuto, seteditAuto] = useState(false);
  const array: ReactNode[] = [
    <Link to="/pedidos">
      <SiderBarItens
        name="Pedidos"
        isSelected={splitLocation[1] === "pedidos"}
        icon={<BsCart2 />}
      />
    </Link>,
    <Link to="/">
      <SiderBarItens
        name="Ver Ofertas"
        isSelected={splitLocation[1] === "produtos"}
        icon={<BsBasket />}
      />
    </Link>,
  ];

  useEffect(() => {
    if (params.produtoID != undefined) {
      getProductById(params.produtoID);
    }
  }, []);
  const productId = product?.products[0];
  const [settingsAuto, setSettingsAuto] = useState<propsSettingsAuto>({
    PMin: 0,
    PMax: 0,
    QMin: 0,
    QMax: 0,
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Conteiner>
      <SiderBar items={array} />
      {productId ? (
        <main>
          <Text
            text={productId.title}
            color="black"
            type="h3"
            styled="normal"
          />
          <div className="gridProduct">
            <img src={productId.images[0]} alt={productId.title} />

            <div className="info">
              <h3>Melhor Preço Atual:</h3>
              <span>{"R$ " + productId.price}</span>
              <p>Tempo estimado de entrega: 1 dia</p>
              <p>Loja Cofap</p>
              <a href="https://loja.cofap.com.br/p/1863797/kit-de-suspensao-dianteira-cofap-tkc03117-unitario">
                https://loja.cofap.com.br/p/1863797/kit-de-suspensao-dianteira-cofap-tkc03117-unitario
              </a>
            </div>

            <div className="auto">
              <p>Quantidade em estoque: 21</p>
              <div className="checkbox">
                <p>Estoque automático</p>
                {user?.isAdm == false ? (
                  <CheckboxToggle
                    type="checkbox"
                    defaultChecked={editAuto}
                    disabled={true}
                  />
                ) : (
                  <CheckboxToggle
                    type="checkbox"
                    defaultChecked={editAuto}
                    onChange={() => seteditAuto(!editAuto)}
                  />
                )}
              </div>
              <div
                className={
                  editAuto === true ? "autoinfo open" : "autoinfo close"
                }
              >
                <h5>LIMITES</h5>
                <ul>
                  <li>
                    <p>Preço Mín.:</p>
                    <p>{"R$ " + settingsAuto.PMin}</p>
                  </li>
                  <li>
                    <p>Preço Máx.:</p>
                    <p>{"R$ " + settingsAuto.PMax}</p>
                  </li>
                  <li>
                    <p>Qtd. Mín.:</p>
                    <p>{settingsAuto.QMin + " un."} </p>
                  </li>
                  <li>
                    <p>Qtd. Máx.:</p>
                    <p>{settingsAuto.QMax + " un."} </p>
                  </li>
                </ul>
                {user?.isAdm == true && (
                  <Button
                    text="ATUALIZAR"
                    propsButton={{ onClick: openModal }}
                  />
                )}
              </div>
            </div>
            <div className="lastDiv">
              <Button text="Mais detalhes" />
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0, .70)",
                zIndex: "1000",
              },
              content: {
                border: "2px solid var(--color-light-blue)",
                backgroundColor: "var(--color-blue)",
                borderRadius: "20px",
                outline: "none",
                width: "min-content",
                height: "max-content",
                margin: "auto",
              },
            }}
          >
            <ModalAutomatic
              closeModal={closeModal}
              set_settingsAuto={setSettingsAuto}
              set_editAuto={seteditAuto}
              settingsAuto={settingsAuto}
            />
          </Modal>
        </main>
      ) : (
        <h3 className="notFound">Nenhum produto foi encontrado!</h3>
      )}
    </Conteiner>
  );
}
