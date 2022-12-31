export default async function getIDB(
  name: string,
  onupgradedneeded?: (evt: IDBVersionChangeEvent) => void
): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name);
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(null);
    };
    if (onupgradedneeded) {
      request.onupgradeneeded = onupgradedneeded;
    }
  });
}
