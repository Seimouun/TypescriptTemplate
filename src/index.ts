import { DummyDTO } from './modules'
//TESTING CODE (REMOVE THIS)
const showDebug = (dto? : DummyDTO) : string => {
    if(dto?.dummyName == 'dummy name') {
        return '%c1%c - Congrats, TypeScript working!'
    }else{
        throw new Error('An error occured with DTOs!')
    }
}
console.log(showDebug({dummyId: 1, dummyName: 'dummy name'}), 'color: green;', 'color: white;')
$(()=>{
    const message = '%c2%c - jQuery working as well! %c(if 2 showed up before 1 something went wrong)'
    console.log(message, 'color: green;', 'color: white;', 'color: grey;')
})
// TESTING CODE END