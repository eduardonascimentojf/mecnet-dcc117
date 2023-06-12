import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";

export function NotFound() {
  return (
    <Conteiner>
      <img
        src="https://media.tenor.com/PPOe9MawAvsAAAAM/404-not-found.gif"
        alt="404 Not Found"
      />
      <Text
        color="white"
        text={"Página não encontrada 404 :( "}
        styled="normal"
        type="h1"
      />
    </Conteiner>
  );
}
