/**
 * `RequireSelected` is a utility type that takes a base type `B` and a set of required keys `K`
 * and returns a new type that omits the keys in `K` from `B` and makes the keys in `K` required.
 * @template B - The base type to modify.
 * @template K - The keys to require in the resulting type.
 */
export type RequireSelected<B, K extends keyof B> = Omit<B, K> & Required<Pick<B, K>>