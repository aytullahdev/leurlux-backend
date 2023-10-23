module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'info@leurlux.com',
                subject: 'You have new Training  Service request',
                text: `
                Booking Information
                Name: ${result.name}
                Email: ${result.email}
                Phone: ${result.phone}
                Package Type : ${result.packagetype}
                Booking Date: ${result.bookingdate}
                Number of Persons: ${result.persons}
                Other Request: ${result.otherrequest}
                Id: ${result.id}
                `

            })
        } catch (err) {
            console.log(err)
        }
    }
}