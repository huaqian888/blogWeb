export interface Result {
	code: number;
	msg?: string;
}

export interface ResultData<T = unknown> extends Result {
	data?: T;
}
