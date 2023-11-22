(async () => {
    const prisma = require('./lib/prisma-client')
    
    prisma.post.create({
        data: {
            title: 'Prisma makes databases easy',
            content: 'Prisma is easy to setup and has a great community behind it.',
            slug: 'prisma-makes-databases-easy',
            image: 'image.jpg',
            published: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})()