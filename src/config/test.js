import { setValue, getValue, getHValue, delValue } from "./RedisConfig"

setValue('simu', 'this message from redis client!!!', 100)

getValue('simu').then(res=>{
    console.log('getValue:' + res)
})

delValue('simu')

setValue('simuobj', {name: 'xixi', age: 23, address: 'china'})
getHValue('simuobj').then( res => {
    console.log('getHValue:' + JSON.stringify(res, null ,2))
})