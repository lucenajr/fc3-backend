import { describe, expect, test } from 'vitest';
import { Category } from './category';

describe('Category Tests', () => {
    test('Test constructor category', () => {
        const category = new Category('Movie')

        expect(category.name).toBe('Movie')
    })
})