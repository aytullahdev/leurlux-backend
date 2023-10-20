module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'info@leurlux.com',
                subject: 'You have new Massage Service request',
                text: `
                Booking Information
                Name: ${result.name}
                Email: ${result.email}
                Phone: ${result.phone}
                Service Name : ${result.service}
                Booking Date: ${result.bookingdate}
                Number of Guests: ${result.numberofguests}
                Other Request: ${result.otherrequest}
                Id: ${result.id}
                `

            })
        } catch (err) {
            console.log(err)
        }
    }
}