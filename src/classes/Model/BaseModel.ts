import CRUDable from "@/interfaces/CRUDable";
import type Entity from "@/types/Entity";

export default abstract class BaseModel<Data> implements CRUDable<Data> {
  public abstract create(data: Data): Promise<Boolean>;
  public abstract read(id: number): Promise<Entity<Data> | undefined>;
  public abstract readAll(): Promise<Entity<Data>[]>;
  public abstract update(data: Entity<Data>): Promise<Boolean>;
  public abstract delete(id: number): Promise<Boolean>;
}
