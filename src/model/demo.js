import User from './User'

const info = {
    username: 'wangwu',
    password: '123456'
}

// 增
const insert = async () => {
    const data = new User(info)
    const result = await data.save()
    console.log(result)
}

// 查
const select = async () =>  {
    const result = await User.find()
    console.log(result)
}

// 改
const update = async () => {
    const result = await User.updateOne({username: 'wangwu'}, {email: 'simu@simu.com'})
    console.log(result)
}

// 删
const del = async () => {
    const result = await User.deleteOne({username: 'wangwu'})
    console.log(result)
}

insert()
// select()
// update()
// del()
