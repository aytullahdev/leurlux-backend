module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'info@leurlux.com',
                subject: 'You have new Yacht Booking Request',
                text: `Booking Information
                Email: ${result.email}
                Name: ${result.name}
                Phone: ${result.phone}
                Yacht Name: ${result.yachtname}
                Season: ${result.season}
                Book Date: ${result.bookdate}
                Id: ${result.id}
                `

            })
        } catch (err) {
            console.log(err)
        }
    }
}