module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'ayat@liberate-labs.com',
                defaultReplyTo: 'ayat@liberate-labs.com',
            },
        },
    },
});