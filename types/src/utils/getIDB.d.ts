export default function getIDB(name: string, onupgradedneeded?: (evt: IDBVersionChangeEvent) => void): Promise<IDBDatabase>;
