import CRUDable from "@/interfaces/CRUDable";
import type Entity from "@/types/Entity";

export default abstract class BaseModel<Data> implements CRUDable<Data> {
  public abstract create(data: Data): boolean | Promise<boolean>;
  public abstract read(
    id: number
  ): Readonly<Entity<Data> | undefined | Promise<Entity<Data> | undefined>>;
  public abstract readAll(): Readonly<Entity<Data>[] | Promise<Entity<Data>[]>>;
  public abstract update(data: Entity<Data>): boolean | Promise<boolean>;
  public abstract delete(id: number): boolean | Promise<boolean>;
}
