import CRUDable from "@/interfaces/CRUDable";
import type Entity from "@/types/Entity";
export default abstract class BaseRepo<Data> implements CRUDable<Data> {
    abstract create(data: Data): boolean | Promise<boolean>;
    abstract read(id: number): Readonly<Entity<Data> | undefined | Promise<Entity<Data> | undefined>>;
    abstract readAll(): Readonly<Entity<Data>[] | Promise<Entity<Data>[]>>;
    abstract update(data: Entity<Data>): boolean | Promise<boolean>;
    abstract delete(id: number): boolean | Promise<boolean>;
}
