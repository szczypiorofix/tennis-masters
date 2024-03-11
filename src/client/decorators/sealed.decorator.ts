
export function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export function freeze(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function required(target: any, key: string) {
    let currentValue = target[key];

    Object.defineProperty(target, key, {
        set: (newValue: string) => {
            if (!newValue) {
                throw new Error(`${key} is required.`);
            }
            currentValue = newValue;
        },
        get: () => currentValue,
    });
}
