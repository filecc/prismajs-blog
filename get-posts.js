(async () => {
    const prisma = require('./lib/prisma-client')
    
    prisma.post.findMany().then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})()