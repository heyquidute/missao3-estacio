import ControleEditora from "../../../classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora

export default (req: NextApiRequest, res: NextApiResponse) => {
    try{
        if (req.method === 'GET') {
            const editoras = controleEditora.getEditoras()
            res.status(200).json(editoras)
        } else if (req.method === 'POST') {
            const novaEditora = JSON.parse(req.body)
            controleEditora.incluir(novaEditora)
            res.status(201).json({message: 'Editora incluída com sucesso'})
        } else {
            res.status(405).end()
        }
    } catch (error){
        console.error(error)
        res.status(500).json({message: 'Erro interno do servidor'})
    }

}

