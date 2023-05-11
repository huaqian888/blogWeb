const toString = Object.prototype.toString;
export function is(val: unknown, type: string): boolean {
	return toString.call(val) === `[object ${type}]`;
}

export function isFunction(val: unknown) {
	return is(val, 'Function');
}
