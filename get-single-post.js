(async () => {
    const prisma = require('./lib/prisma-client')
    
    prisma.post.findUnique({
        where: {
            slug: 'prisma-makes-databases-easy-01'
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})()