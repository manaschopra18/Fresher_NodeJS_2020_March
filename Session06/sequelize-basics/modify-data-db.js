const { db, Users } = require('./db')

const SEP = '\n========================\n'

async function task () {
    const prabhas = await Users.findOne({
        where: { name: 'Prabhas' }
    })

    console.log(prabhas)
    console.log(SEP)

    prabhas.age++

    console.log(prabhas)
    console.log(SEP)

    await prabhas.save()

    console.log(prabhas)
    console.log(SEP)
}

task()