import { test } from '@playwright/test';
import { describe } from 'node:test';

// test.describe.configure({ mode: 'parallel' });
// test.describe.configure({ mode: 'serial' });

describe('Parallel Test Suite', () => {

    test('Parallel Test 1', async ({ page }) => {
        console.log('Executing Parallel Test 1');
    })
    test('Parallel Test 2', async ({ page }) => {
        console.log('Executing Parallel Test 2');
    })
    test('Parallel Test 3', async ({ page }) => {
        console.log('Executing Parallel Test 3');
    })



})