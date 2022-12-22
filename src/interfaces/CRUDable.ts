import type Entity from "@/types/Entity";
export default interface ObjectStore<Data> {
  create(data: Data): Promise<Boolean>;
  read(id: number): Promise<Entity<Data> | undefined>;
  update(id: number, data: Data): Promise<Boolean>;
  delete(id: number): Promise<Boolean>;
}
