import { Request, Response } from "express";
import * as fns from "firebase-functions";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../..";
import { IMessage } from "../../core/type";

export const onSendMessage = fns.https.onRequest(async (request: Request, response: Response): Promise<void> => {
    const mssgCode = uuidv4();
    fns.logger.info(`${request.method} onSendMessage ${mssgCode}`, { structuredData: true });
    const data = Object.assign(request.body, { code: mssgCode }) as IMessage;
    await db.collection('messages').add(data);
    response.status(200).send(data);
});