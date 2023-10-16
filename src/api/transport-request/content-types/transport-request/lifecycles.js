module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'ayat@liberate-labs.com',
                subject: 'You have new Transport request',
                text: `New Transport Request
                Email: ${result.email}
                Name: ${result.name}
                Phone: ${result.phone}
                Type : ${result.transporttype}
                Pickup Address: ${result.pickupaddress}
                Pickup Date: ${result.pickupdate}
                Dropoff Address: ${result.dropoffaddress}
                Dropoff Date: ${result.dropoffdate}
                Number Of People: ${result.numberofpeople}
                Number of Luggages: ${result.luggages}
                Flight Number: ${result.flightnumber}
                Id: ${result.id}
                `

            })
        } catch (err) {
            console.log(err)
        }
    }
}