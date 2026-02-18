import { test as base} from '@playwright/test';

type MyFixtures ={
    helloWorld : any
    greatDay : any
}

export const test=base.extend<MyFixtures>({
    helloWorld: async({}, use) => {
        console.log('Hellow World')
        const myWorld='Hellow World'
        await use(myWorld)
        console.log('Good Buy')
    },

    greatDay: async({}, use)=>{
        await use()
    }
})  
