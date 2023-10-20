module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'info@leurlux.com',
                subject: 'You have new Apartment request',
                text: `
                Booking Information
                Name: ${result.name}
                Email: ${result.email}
                Phone: ${result.phone}
                Price: ${result.price}
                Apartment Name : ${result.apartmentname}
                Arrival Date: ${result.arrival}
                Departure: ${result.departure}
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