import ControleLivro from "../../../classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivro

export default (req: NextApiRequest, res: NextApiResponse) => {
    try{
        if (req.method ==='GET'){
            const livros = controleLivro.obterLivros()
            res.status(200).json(livros)
        } else if (req.method==='POST'){
            const novoLivro = JSON.parse(req.body)
            controleLivro.incluir(novoLivro)
            res.status(200).json({message: 'Livro incluído com sucesso'})
        } else {
            res.status(405).end()
        }
    } catch(error){
        console.error(error)
        res.status(500).json({message: '[livros-index] Erro interno de servidor'})
    }
}