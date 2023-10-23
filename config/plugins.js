module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: env('EMAIL_SEND_FROM'),
                defaultReplyTo: env('EMAIL_SEND_REPALY_TO'),
            },
        },
    },
    upload: {
        config: {
            provider: "strapi-provider-upload-do",
            providerOptions: {
                key: env('DO_SPACE_ACCESS_KEY'),
                secret: env('DO_SPACE_SECRET_KEY'),
                endpoint: env('DO_SPACE_ENDPOINT'),
                space: env('DO_SPACE_BUCKET'),

            }
        },
    },
});