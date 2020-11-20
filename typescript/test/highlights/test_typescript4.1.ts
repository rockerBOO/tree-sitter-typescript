type World = "world";

type Greeting = `hello${World}`;


type Color = "red" | "blue";
type Quantity = "one" | "two";

type SeussFish = `${Quantity | Color} fish`;

type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"
declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;

type PropEventSource<T> = {
    on(eventName: `${string & keyof T}Changed`, callback: () => void): void;
};

type PropEventSource<T> = {
    on<K extends string & keyof T>
        (eventName: `${K}Changed`, callback: (newValue: T[K]) => void ): void;
};

declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

type EnthusiasticGreeting<T extends string> = `${Uppercase<T>}`

type HELLO = EnthusiasticGreeting<"hello">;

type MappedTypeWithNewKeys<T> = {
	[K in keyof T as NewKeyType]: T[K]
}

type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;

type RemoveKindField<T> = {
    [K in keyof T as Exclude<K, "name">]: T[K]
};

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

// Like `promise.then(...)`, but more accurate in types.
declare function customThen<T, U>(
    p: Promise<T>,
    onFulfilled: (value: Awaited<T>) => U
): Promise<Awaited<U>>;

interface Options {
    path: string;
    permissions: number;

    // Extra properties are caught by this index signature.
    [propName: string]: string | number;
}

