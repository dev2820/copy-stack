export default interface ObjectStore<Entity> {
  create(entity: Entity): Promise<Boolean>;
  read(id: number): Promise<Entity | undefined>;
  update(id: number, entity: Entity): Promise<Boolean>;
  delete(id: number): Promise<Boolean>;
}
