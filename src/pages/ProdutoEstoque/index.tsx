/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation, useParams } from "react-router-dom";
import { BsBasket, BsCart2 } from "react-icons/bs";
import Modal from "react-modal";
import { CheckboxToggle } from "../../ui/styles/checkboxToggle";
import { Button } from "../../ui/components/Button";
import { ModalAutomatic, propsSettingsAuto } from "./ModalAutomatic";
import { useAuth } from "../../data/contexts/auth";
import { apiJava } from "../../data/api";
import { Stock } from "../../@types";
import { auxPrice } from "../../helpers";
import { Carousel } from "react-carousel-minimal";
import { EditarProduto } from "../EditarProduto";
import { useProduct } from "../../data/contexts/product";

export function ProdutoEstoque() {
  const params = useParams();
  const location = useLocation();
  const { pathname } = location;
  const { user } = useAuth();
  const splitLocation = pathname.split("/");
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
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);

  function openModalEdit() {
    setIsOpenEdit(true);
  }
  function closeModalEdit() {
    setIsOpenEdit(false);
  }
  const { product } = useProduct();
  const [stock, setStock] = useState<Stock>();
  const [editAuto, seteditAuto] = useState(false);
  const [settingsAuto, setSettingsAuto] = useState<propsSettingsAuto>();
  const [id, setId] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      if (params.produtoID != undefined) {
        setId(params.produtoID);
        await apiJava
          .get<Stock>("/stock/products/" + params.produtoID)
          .then((response) => {
            setStock(response.data);
            seteditAuto(response.data.autoStock.automates);
            setSettingsAuto({
              PMin: response.data.autoStock.minPrice,
              PMax: response.data.autoStock.maxPrice,
              QMin: response.data.autoStock.minQuantity,
              QMax: response.data.autoStock.maxQuantity,
            });
          });
      }
    };
    fetchData();
  }, [product]);
  const data: { image: string }[] = [];
  stock?.image.map((iten) => {
    data.push({
      image: iten,
    });
  });
  return (
    <Conteiner>
      <SiderBar items={array} />
      {stock ? (
        <main>
          <Text text={stock.name} color="black" type="h3" styled="normal" />
          <div className="gridProduct">
            <div>
              <Carousel
                data={data}
                time={2000}
                radius="10px"
                slideNumber={true}
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="fill"
                thumbnails={false}
                style={{
                  height: "200px",
                }}
              />
            </div>

            <div className="info">
              <Text type="h4" text="Informação" styled="normal" color="black" />
              <p className="price">
                Preço:
                <span>{"R$ " + auxPrice(stock.price)}</span>
              </p>
              <p>{stock.description}</p>
              <p>Lojas: {stock.manufacturer}</p>
              <a href="https://loja.cofap.com.br/p/1863797/kit-de-suspensao-dianteira-cofap-tkc03117-unitario">
                https://loja.cofap.com.br/p/1863797/kit-de-suspensao-dianteira-cofap-tkc03117-unitario
              </a>
            </div>

            <div className="auto">
              <p>Quantidade em estoque: {stock.stock}</p>
              <div className="checkbox">
                <p>Estoque automático</p>
                {user?.isAdmin == false ? (
                  <CheckboxToggle
                    type="checkbox"
                    defaultChecked={editAuto}
                    disabled={true}
                  />
                ) : (
                  <CheckboxToggle
                    type="checkbox"
                    className={"checked_" + editAuto}
                    onChange={() => seteditAuto(!editAuto)}
                  />
                )}
              </div>
              <div
                className={
                  editAuto === true ? "autoinfo open" : "autoinfo close"
                }
              >
                <h4>LIMITES</h4>
                <ul>
                  <li>
                    <p>Preço Mín.:</p>
                    <p>{"R$ " + auxPrice(settingsAuto?.PMin)}</p>
                  </li>
                  <li>
                    <p>Preço Máx.:</p>
                    <p>{"R$ " + auxPrice(settingsAuto?.PMax)}</p>
                  </li>
                  <li>
                    <p>Qtd. Mín.:</p>
                    <p>{settingsAuto?.QMin + " un."} </p>
                  </li>
                  <li>
                    <p>Qtd. Máx.:</p>
                    <p>{settingsAuto?.QMax + " un."} </p>
                  </li>
                </ul>
                {user?.isAdmin == true && (
                  <Button
                    text="ATUALIZAR"
                    propsButton={{ onClick: openModal }}
                    type="info"
                  />
                )}
              </div>
            </div>
            <div className="lastDiv">
              <Button text="Mais detalhes" type="info" />
              <Button
                text="Gerencia estoque"
                type="info"
                propsButton={{
                  onClick: () => {
                    openModalEdit();
                  },
                }}
              />
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
              id={stock.autoStock.id_AutoStock}
            />
          </Modal>
        </main>
      ) : (
        <Text
          type="notFound"
          text="Nenhum produto foi encontrado!"
          styled="normal"
          color="black"
          class_name="notFound"
        />
      )}
      <Modal
        isOpen={modalIsOpenEdit}
        onRequestClose={closeModalEdit}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0, .93)",
            zIndex: "1000",
            overflowY: "scroll",
          },
          content: {
            zIndex: "1000",
            border: "2px solid var(--color-light-blue)",
            backgroundColor: "var(--color-blue)",
            overflow: "hidden",
            borderRadius: "20px",
            outline: " none",
          },
        }}
      >
        <EditarProduto closeModal={closeModalEdit} id={id} />
      </Modal>
    </Conteiner>
  );
}
