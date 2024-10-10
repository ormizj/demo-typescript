/* return example */
type GetReturnType<Type> = Type extends (
    ...args: any[]
) 
=> infer Return
? Return
: never;

type Str = GetReturnType<(first: number) => string>;
const returned : Str = '0';

/* param example */
type GetFirstParamType<T> = T extends (
    first: infer P
) => any
? P 
: never;

type Num = GetFirstParamType<(first: number) => string>;
const firstParam : Num = 0;
