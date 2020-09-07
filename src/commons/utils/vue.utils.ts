export function broadcast(componentName: string, eventName: string, params: any) {
    // @ts-ignore
    this.$children.forEach((child) => {
        const name = child.$options.name;
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // @ts-ignore
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
