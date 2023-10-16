module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'ayat@liberate-labs.com',
                from: 'ayat@liberate-labs.com',
                subject: 'You have new Super car request',
                text: `New Super Car Request
                Name: ${result.name}
                Email: ${result.email}
                Phone: ${result.phone}
                Car Name : ${result.carname}
                Pickup Address: ${result.pickupaddress}
                Pickup Date: ${result.pickupdate}
                Dropoff Address: ${result.dropoffaddress}
                Dropoff Date: ${result.dropoffdate}
                Id: ${result.id}
                `

            })
        } catch (err) {
            console.log(err)
        }
    }
}