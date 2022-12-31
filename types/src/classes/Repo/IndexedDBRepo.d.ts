import type Entity from "@/types/Entity";
import BaseRepo from "@/classes/Repo/BaseRepo";
export default class IndexedDBRepo<Data> extends BaseRepo<Data> {
    #private;
    constructor(db: IDBDatabase, storeName: string, option?: IDBObjectStoreParameters);
    create(data: Data): Promise<boolean>;
    readAll(): Promise<Entity<Data>[]>;
    read(id: number): Promise<Entity<Data> | undefined>;
    update(entity: Entity<Data>): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
