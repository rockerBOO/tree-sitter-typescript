type World = "world";

type Greeting = `hello${World}`;


type Color = "red" | "blue";
type Quantity = "one" | "two";

type SeussFish = `${Quantity | Color} fish`;

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

