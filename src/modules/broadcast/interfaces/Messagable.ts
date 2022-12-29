type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;

type StructuredClonable =
  | Array<StructuredClonable>
  | ArrayBuffer
  | Boolean
  | DataView
  | Date
  | Error
  | Map<StructuredClonable, StructuredClonable>
  | Object
  | RegExp
  | Set<StructuredClonable>
  | String
  | TypedArray;

export default interface Messagable {
  [state: string]: StructuredClonable;
}
