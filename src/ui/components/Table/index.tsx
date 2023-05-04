import { BsPen, BsTrash3 } from "react-icons/bs";
import { useAuth } from "../../../data/contexts/auth";
import { Conteiner } from "./styles";


export function Table() {
  const { employees } = useAuth();
  const teste = employees;

  function deleteEmployee(_id: number) {
    let x = 0;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === _id) {
        x = i + 1;
      }
      employees[i] = teste[x];
      x++;
    }
    employees.pop();
  }
  return (
    <Conteiner>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>É gerente</th>
          <th>Editar</th>
          <th>Apagar</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((iten, i) => (
          <tr key={i}>
            <td>{iten.name}</td>
            <td>{iten.email}</td>
            <td>
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={iten.isAdm}
              />
            </td>
            <td>
              <BsPen />
            </td>
            <td onClick={() => deleteEmployee(iten.id)}>
              <BsTrash3 />
            </td>
          </tr>
        ))}
      </tbody>
    </Conteiner>
  );
}
