import type Entity from "@/types/Entity";
export default interface ObjectStore<Data> {
  create(data: Data): Promise<Boolean>;
  read(id: number): Promise<Entity<Data> | undefined>;
  readAll(): Promise<Entity<Data>[]>;
  update(data: Entity<Data>): Promise<Boolean>;
  delete(id: number): Promise<Boolean>;
}
