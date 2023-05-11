import { describe, expect, it } from 'vitest';

import sum from './sum';

describe('#test', () => {
	it('returns 0 with no numbers', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
