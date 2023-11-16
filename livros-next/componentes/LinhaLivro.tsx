import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";

const controleEdiora = new ControleEditora()

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
    resumo: string
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir, resumo }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  
    return (
      <tr>
        <td>
          {livro.titulo} <br></br>
          <button className="btn btn-danger" onClick={() => excluir()}>
            Excluir
          </button>
        </td>
        <td>{resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
        <td></td>
      </tr>
    );
  };
  
  export default LinhaLivro;