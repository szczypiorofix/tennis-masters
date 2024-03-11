import {Connection} from "mongoose";
import MongoClient from '../core/MongoClient';

class MongoDBService {
  private client: MongoClient;

  public constructor() {
    this.client = MongoClient.getInstance();
  }

  public async connect(): Promise<Connection> {
    return new Promise<Connection>((resolve, reject) => {
      try {
        resolve(this.client.connect());
      } catch(err) {
        reject(err);
      }
    });
  }

  public async close(): Promise<void> {
    return await this.client.close();
  }
}

export default MongoDBService
