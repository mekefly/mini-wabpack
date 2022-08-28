export type MustBeAnArray<E> = E extends any[] ? E : [E];
