(async () => {
    const prisma = require('./lib/prisma-client')
    
    prisma.post.findUnique({
        where: {
            slug: 'prisma-makes-databases-easy'
        }
    })
})()