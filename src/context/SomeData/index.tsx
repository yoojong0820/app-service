import * as React from "react";

export type SomeData = {
    fieldA: Array<string>,
    fieldB: boolean,
    fieldC: Date,
    userName: string
};

export const initialSomeData = {
    fieldA: ['Hello', 'World'],
    fieldB: false,
    fieldC: new Date(),
    userName: '홍길동'
};

const SomeDataContext = React.createContext<SomeData>(initialSomeData);

export default SomeDataContext;
