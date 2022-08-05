export * from './other';
export const x = 456;

// Note: changing the order of the exports doens't seem to affect the runtime behavior.
// e.g.: this...
// export const x = 456;
// export * from './other';
// ... will still print '456' (the named export) at runtime.

