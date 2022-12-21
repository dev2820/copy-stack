export default interface ObjectStore<Entity> {
  create(entity: Entity): Promise<Entity[]>;
  read(id: string): Promise<Entity>;
  update(id: string, entity: Entity): Promise<Entity[]>;
  delete(): Promise<Entity[]>;
}
