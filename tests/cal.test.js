import { describe, it } from "node:test";
import assert from "node:assert";
import { add, minus } from "../cal.js";

describe("add function", () => {
	it("add(1, 2) = 3", () => {
		assert.deepStrictEqual(add(1, 2), 3);
	});

	it("add(1, -2) = -1", () => {
		assert.deepStrictEqual(add(1, -2), -1);
	});
});

describe("minus function", () => {
	it("minus(1, 2) = -1", () => {
		assert.deepStrictEqual(minus(1, 2), -1);
	});

	it("minus(1, -2) = 3", () => {
		assert.deepStrictEqual(minus(1, -2), 3);
	});
});
