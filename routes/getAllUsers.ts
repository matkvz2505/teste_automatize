import { Response, Request } from 'express';
import axios from 'axios';

// export default function getAllUsers(res: Response, req: Request){
//     try {
//         const users = [
//             {
//                 name: 'Api para teste',
//                 description: 'Teste sendo transmido com sucesso'
//             }
//         ]
//         res.sendStatus(200);
//     } catch (error) {
//         console.log(error);
//     }
//     return getAllUsers;
// }

export default async function getSite(_req: Request, res: Response) {
    try {
      const { data: GroupById } = await axios.get(
        `https://www.youtube.com/`,
      );
      res.status(200).send(GroupById);
    } catch (err) {
      res.status(404).send({ message: '404 Group not found' });
    }
    return getSite;
  };
