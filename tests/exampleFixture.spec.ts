//import { test, expect } from '@playwright/test';
import { test } from '../fixtureFolder/fixture';

// test.beforeEach('Hellow World',async({})=>{
//     console.log('Hellow World');
// })

test('Smoke Where is My Candy',async({helloWorld})=>{
    //console.log(helloWorld);
    console.log('Where is My Candy');
})

test('Yes Im alive', async({helloWorld})=>{
    console.log('Yes Im alive');
})
