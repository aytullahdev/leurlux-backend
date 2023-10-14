module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'ayatullah7755@gmail.com',
                from: 'ayat@liberate-labs.com',
                subject: 'You have new Transport request',
                text: `New Transport Request
                email: ${result.email}
                name: ${result.name}
                phone: ${result.phone}
                type : ${result.transporttype}
                
                `

            })
        } catch (err) {
            console.log(err)
        }
    }
}