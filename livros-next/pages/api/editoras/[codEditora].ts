import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from '.'

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET'){
        const { codEditora } = req.query
        const codEditoraNumber = Number(codEditora)

        if(isNaN(codEditoraNumber)){
            res.status(400).json({error: 'Código de editora inválido'})
        }

        const nomeEditora = controleEditora.getNomeEditora(codEditoraNumber)

        if(nomeEditora){
            res.status(200).json({nome:nomeEditora})
        } else {
            res.status(404).json({error: 'Editora não encontrada'})
        }
    } else {
        res.status(405).end()
    }
}