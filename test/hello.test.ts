import { describe, it, expect } from 'bun:test'
import {sayHello} from "../src/hello.ts";

describe('Bun test', () => {
    it('should support unit test', () => {
        const response = sayHello('Erni Safitri');
        expect(response).toBe('Hello Erni Safitri');
    });
});

describe('Bun test uwing watch', () => {
    it('should support watch mode unit test', () => {
        const response = sayHello('Aditya Ricki');
        expect(response).toBe('Hello Aditya Ricki');
    });
});
