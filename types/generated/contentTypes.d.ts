import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApartmentRequestApartmentRequest
  extends Schema.CollectionType {
  collectionName: 'apartment_requests';
  info: {
    singularName: 'apartment-request';
    pluralName: 'apartment-requests';
    displayName: 'Apartment Request';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    apartmentname: Attribute.String & Attribute.Required;
    arrival: Attribute.DateTime & Attribute.Required;
    departure: Attribute.DateTime & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    price: Attribute.String & Attribute.Required;
    otherrequest: Attribute.Text;
    numberofguests: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::apartment-request.apartment-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::apartment-request.apartment-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBeachclubRequestBeachclubRequest
  extends Schema.CollectionType {
  collectionName: 'beachclub_requests';
  info: {
    singularName: 'beachclub-request';
    pluralName: 'beachclub-requests';
    displayName: 'Beachclub Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    beachclub: Attribute.String & Attribute.Required;
    bookingdate: Attribute.DateTime & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    numberofguests: Attribute.Integer & Attribute.Required;
    otherrequest: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::beachclub-request.beachclub-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::beachclub-request.beachclub-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCustomersRequestCustomersRequest
  extends Schema.CollectionType {
  collectionName: 'customers_requests';
  info: {
    singularName: 'customers-request';
    pluralName: 'customers-requests';
    displayName: 'Customers request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    request: Attribute.Text & Attribute.Required;
    note: Attribute.RichText & Attribute.Private;
    status: Attribute.Enumeration<['New', 'Pending', 'Closed']> &
      Attribute.DefaultTo<'New'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::customers-request.customers-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::customers-request.customers-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHotelRequestHotelRequest extends Schema.CollectionType {
  collectionName: 'hotel_requests';
  info: {
    singularName: 'hotel-request';
    pluralName: 'hotel-requests';
    displayName: 'Hotel Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    hotelname: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    otherrequest: Attribute.Text;
    numberofguests: Attribute.Integer & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    arrival: Attribute.DateTime & Attribute.Required;
    departure: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hotel-request.hotel-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hotel-request.hotel-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMassageRequestMassageRequest extends Schema.CollectionType {
  collectionName: 'massage_requests';
  info: {
    singularName: 'massage-request';
    pluralName: 'massage-requests';
    displayName: 'Massage Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    service: Attribute.String & Attribute.Required;
    numberofguests: Attribute.Integer & Attribute.Required;
    bookingdate: Attribute.DateTime & Attribute.Required;
    otherrequest: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::massage-request.massage-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::massage-request.massage-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNightClubRequestNightClubRequest
  extends Schema.CollectionType {
  collectionName: 'night_club_requests';
  info: {
    singularName: 'night-club-request';
    pluralName: 'night-club-requests';
    displayName: 'Night Club Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    clubname: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    bookingdate: Attribute.DateTime & Attribute.Required;
    numberofguests: Attribute.Integer & Attribute.Required;
    otherrequest: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::night-club-request.night-club-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::night-club-request.night-club-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivateAircraftRequestPrivateAircraftRequest
  extends Schema.CollectionType {
  collectionName: 'private_aircraft_requests';
  info: {
    singularName: 'private-aircraft-request';
    pluralName: 'private-aircraft-requests';
    displayName: 'Private Aircraft Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    flyfrom: Attribute.String & Attribute.Required;
    flyto: Attribute.String & Attribute.Required;
    flydate: Attribute.DateTime & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    passengers: Attribute.Integer & Attribute.Required;
    otherdetails: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::private-aircraft-request.private-aircraft-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::private-aircraft-request.private-aircraft-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivateRunnerPrivateRunner extends Schema.CollectionType {
  collectionName: 'private_runners';
  info: {
    singularName: 'private-runner';
    pluralName: 'private-runners';
    displayName: 'Private Runner';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    pickupdate: Attribute.DateTime & Attribute.Required;
    otherrequest: Attribute.Text & Attribute.Required;
    whattodo: Attribute.Text & Attribute.Required;
    service: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::private-runner.private-runner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::private-runner.private-runner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProtrainingRequestProtrainingRequest
  extends Schema.CollectionType {
  collectionName: 'protraining_requests';
  info: {
    singularName: 'protraining-request';
    pluralName: 'protraining-requests';
    displayName: 'Protraining Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    bookingdate: Attribute.DateTime & Attribute.Required;
    packagetype: Attribute.String & Attribute.Required;
    persons: Attribute.Integer & Attribute.Required;
    otherrequest: Attribute.Text;
    name: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::protraining-request.protraining-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::protraining-request.protraining-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRestaurantRequestRestaurantRequest
  extends Schema.CollectionType {
  collectionName: 'restaurant_requests';
  info: {
    singularName: 'restaurant-request';
    pluralName: 'restaurant-requests';
    displayName: 'Restaurant Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    restaurant: Attribute.String & Attribute.Required;
    bookingdate: Attribute.DateTime & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    numberofguests: Attribute.Integer & Attribute.Required;
    otherrequest: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-request.restaurant-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::restaurant-request.restaurant-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSupercarCollectionSupercarCollection
  extends Schema.SingleType {
  collectionName: 'supercar_collections';
  info: {
    singularName: 'supercar-collection';
    pluralName: 'supercar-collections';
    displayName: 'supercarCollection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cars: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::supercar-collection.supercar-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::supercar-collection.supercar-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSupercarRequestSupercarRequest
  extends Schema.CollectionType {
  collectionName: 'supercar_requests';
  info: {
    singularName: 'supercar-request';
    pluralName: 'supercar-requests';
    displayName: 'Supercar Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    carname: Attribute.String & Attribute.Required;
    pickupdate: Attribute.DateTime & Attribute.Required;
    dropoffdate: Attribute.DateTime & Attribute.Required;
    pickupaddress: Attribute.String & Attribute.Required;
    dropoffaddress: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    status: Attribute.Enumeration<['New', 'Pending', 'Confirmed']> &
      Attribute.DefaultTo<'New'>;
    note: Attribute.RichText & Attribute.Private;
    payment: Attribute.Enumeration<['Pending', 'Paid']> &
      Attribute.DefaultTo<'Pending'>;
    price: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::supercar-request.supercar-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::supercar-request.supercar-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTransportPriceTransportPrice extends Schema.CollectionType {
  collectionName: 'transport_prices';
  info: {
    singularName: 'transport-price';
    pluralName: 'transport-prices';
    displayName: 'transport price';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PricingOptions: Attribute.JSON;
    ExtraPricing: Attribute.JSON;
    vehicle: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transport-price.transport-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transport-price.transport-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTransportRequestTransportRequest
  extends Schema.CollectionType {
  collectionName: 'transport_requests';
  info: {
    singularName: 'transport-request';
    pluralName: 'transport-requests';
    displayName: 'Transport Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    pickupdate: Attribute.DateTime & Attribute.Required;
    dropoffdate: Attribute.DateTime & Attribute.Required;
    pickupaddress: Attribute.String & Attribute.Required;
    dropoffaddress: Attribute.String & Attribute.Required;
    numberofpeople: Attribute.Integer & Attribute.Required;
    luggages: Attribute.Integer & Attribute.Required;
    flightnumber: Attribute.String & Attribute.Required;
    otherrequest: Attribute.String;
    payment: Attribute.Enumeration<['Pending', 'Paid']> &
      Attribute.DefaultTo<'Pending'>;
    status: Attribute.Enumeration<['New', 'Pending', 'Confirmed']> &
      Attribute.DefaultTo<'New'>;
    phone: Attribute.String & Attribute.Required;
    transporttype: Attribute.String & Attribute.Required;
    payment_id: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transport-request.transport-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transport-request.transport-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVillaRequestVillaRequest extends Schema.CollectionType {
  collectionName: 'villa_requests';
  info: {
    singularName: 'villa-request';
    pluralName: 'villa-requests';
    displayName: 'Villa Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    villaname: Attribute.String & Attribute.Required;
    price: Attribute.String & Attribute.Required;
    arrival: Attribute.DateTime & Attribute.Required;
    departure: Attribute.DateTime & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    otherrequest: Attribute.Text;
    numberofguests: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::villa-request.villa-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::villa-request.villa-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiYachtRequestYachtRequest extends Schema.CollectionType {
  collectionName: 'yacht_requests';
  info: {
    singularName: 'yacht-request';
    pluralName: 'yacht-requests';
    displayName: 'Yacht Request';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    yachtname: Attribute.String & Attribute.Required;
    season: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    bookdate: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::yacht-request.yacht-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::yacht-request.yacht-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::apartment-request.apartment-request': ApiApartmentRequestApartmentRequest;
      'api::beachclub-request.beachclub-request': ApiBeachclubRequestBeachclubRequest;
      'api::customers-request.customers-request': ApiCustomersRequestCustomersRequest;
      'api::hotel-request.hotel-request': ApiHotelRequestHotelRequest;
      'api::massage-request.massage-request': ApiMassageRequestMassageRequest;
      'api::night-club-request.night-club-request': ApiNightClubRequestNightClubRequest;
      'api::private-aircraft-request.private-aircraft-request': ApiPrivateAircraftRequestPrivateAircraftRequest;
      'api::private-runner.private-runner': ApiPrivateRunnerPrivateRunner;
      'api::protraining-request.protraining-request': ApiProtrainingRequestProtrainingRequest;
      'api::restaurant-request.restaurant-request': ApiRestaurantRequestRestaurantRequest;
      'api::supercar-collection.supercar-collection': ApiSupercarCollectionSupercarCollection;
      'api::supercar-request.supercar-request': ApiSupercarRequestSupercarRequest;
      'api::transport-price.transport-price': ApiTransportPriceTransportPrice;
      'api::transport-request.transport-request': ApiTransportRequestTransportRequest;
      'api::villa-request.villa-request': ApiVillaRequestVillaRequest;
      'api::yacht-request.yacht-request': ApiYachtRequestYachtRequest;
    }
  }
}
