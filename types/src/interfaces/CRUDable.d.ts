import type Entity from "@/types/Entity";
export default interface ObjectStore<Data> {
    create(data: Data): boolean | Promise<boolean>;
    read(id: number): Readonly<Entity<Data> | undefined | Promise<Entity<Data> | undefined>>;
    readAll(): Readonly<Entity<Data>[] | Promise<Entity<Data>[]>>;
    update(data: Entity<Data>): boolean | Promise<boolean>;
    delete(id: number): boolean | Promise<boolean>;
}
