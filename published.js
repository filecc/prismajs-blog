(async () => {
    const prisma = require('./lib/prisma-client')
    
    prisma.post.findMany({
        where: {
            published: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})()