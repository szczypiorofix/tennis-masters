import { Document, Types } from 'mongoose';

import { IUser } from '../../../../shared';

export type UserResults = (Document<IUser> & IUser & { _id: Types.ObjectId })[];
