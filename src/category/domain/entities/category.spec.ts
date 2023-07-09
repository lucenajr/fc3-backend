import { describe, expect, test } from 'vitest';
import { Category } from './category';

describe('Category Unit Tests', () => {
    test('Test constructor category', () => {
        const category = new Category('Movie')

        expect(category.name).toBe('Movie')
    })
})