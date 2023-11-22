(async () => {
    const prisma = require('./lib/prisma-client')
    
    prisma.post.delete({
        where: {
            id: 2
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})()