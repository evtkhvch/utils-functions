## utils functions 😜

## omit ⚡️

```html
export const omit = <T extends keyof R, R extends object>(prop: T, obj: R): Pick<R, Exclude<keyof R, T>> => {
    const { [prop]: value, ...newObj } = obj;
    return newObj;
};
```

## concat by prop name ⚡️

```html
export const concatByPropName = <T, R>(prevArr: R[], currArr: T[], prop: string): Array<Spread<T, R>> | T[] => {
    return currArr.map((obj) => {
        const prevObj = prevArr.find((val) => obj[prop] === val[prop]);
        return prevObj ? { ...prevObj, ...obj } : obj;
    });
};
```
