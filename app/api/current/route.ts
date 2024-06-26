import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405);
    }
    try {

        //Cheking if currentUser exists in serverAuth
        const { currentUser } = await serverAuth(req);

        return res.status(200).json(currentUser);
    } catch (error) {
        console.log(error);
        return res.status(400);
    } 
}