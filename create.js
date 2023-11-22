(async () => {
    const prisma = require('./lib/prisma-client')
    const randomLetter = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    console.log(randomLetter)
    prisma.post.create({
        data: {
            title: 'Prisma makes databases easy',
            content: 'Prisma is easy to setup and has a great community behind it.',
            slug: 'prisma-makes-databases-easy' + randomLetter() + randomLetter(),
            image: 'image.jpg',
            published: false
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})()