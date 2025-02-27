export type VisitorFunction = (value: any) => any;
var log_verbose: boolean = false;

export function deepMapObject(value: any, visitorFn: VisitorFunction) {
    log_verbose && console.log(`value: ${value}\t\tvisitorFN: ${visitorFn}`);
    if (Array.isArray(value)) {
        value = value.map((e) => {
            return deepMapObject(e, visitorFn);
        });
    } else if (typeof value == 'object') {
        const newObject = {};
        for (const [k, v] of Object.entries(value)) {
            newObject[k] = deepMapObject(v, visitorFn);
        }
        value = newObject;
    }
    value = visitorFn(value);
    return value;
}
