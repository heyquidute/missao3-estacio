import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default(req: NextApiRequest, res: NextApiResponse) => {
    try{
        if(req.method === 'DELETE'){
            res.status(200).json({message: 'Entrou no DELETE'})
            const { codigo } = req.query
            const codigoNumber = Number(codigo)

            if (!isNaN (codigoNumber)){
                controleLivro.excluir(codigoNumber)
                res.status(200).json({message: 'Livro excluído com sucesso'})
            } else {
                res.status(400).json({message: 'Código de livro inválido'})
            }
            
        }

    } catch (error){
        console.log('Deu ruim')
        console.error(error)
        res.status(500).json({message: 'Erro interno do servidor'})
    }
}