export const omit = <T extends keyof R, R extends object>(prop: T, obj: R): Pick<R, Exclude<keyof R, T>> => {
    const { [prop]: value, ...newObj } = obj;
    return newObj;
};
