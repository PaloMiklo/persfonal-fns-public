import * as fns from "firebase-functions";
import { IMessage } from "../../core/type";

export const onSendMail = fns.firestore.document('messages/{messageId}')
    .onCreate((emailSnapshot: fns.firestore.QueryDocumentSnapshot, context: fns.EventContext) => {
        const data = emailSnapshot.data() as IMessage;
        fns.logger.info('SENDING EMAIL for mssg with code - ' + data.code);
    });