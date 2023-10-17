module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'ayatullah7755@gmail.com',
                subject: 'You have new Private Aircraft Request',
                text: `Booking Information
                Email: ${result.email}
                Name: ${result.name}
                Phone: ${result.phone}
                Fly From: ${result.flyfrom}
                Fly To: ${result.flyto}
                Fly Date: ${result.flydate}
                Id: ${result.id}
                `

            })
        } catch (err) {
            console.log(err)
        }
    }
}