(async () => {
    const prisma = require('./lib/prisma-client')
    
    prisma.post.update({
        where: {
            id: 2
        },
        data: {
            title: 'LalaLand',
            content: 'Prisma is easy to setup and has a great community behind it.',
        }
        }
    ).then((result) => {
        console.log(`Trovat${result.length > 1 ? 'i' : 'o'} ${result.length} post`)
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})()