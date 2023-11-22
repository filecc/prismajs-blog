(async () => {
    const prisma = require('./lib/prisma-client')
    
    prisma.post.delete({
        where: {
            id: 2
        }
    }).then((result) => {
        console.log(`Trovat${result.length > 1 ? 'i' : 'o'} ${result.length} post`)
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})()