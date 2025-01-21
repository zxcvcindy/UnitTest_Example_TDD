import { describe, it } from "node:test";
import assert from "node:assert";
import { add, minus, multiply, divide } from "../cal.js";

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

describe("multiply function", () => {
	it("multiply(1, 2) = 2", () => {
		assert.deepStrictEqual(multiply(1, 2), 2);
	});

	it("multiply(1, -2) = -2", () => {
		assert.deepStrictEqual(multiply(1, -2), -2);
	});
});

describe("divide function", () => {
	it("divide(1, 2) = 0.5", () => {
		assert.deepStrictEqual(divide(1, 2), 0.5);
	});

	it("divide(1, -2) = -0.5", () => {
		assert.deepStrictEqual(divide(1, -2), -0.5);
	});
});
