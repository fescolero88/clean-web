module.exports = {
  DESKPRO_URL: JSON.stringify(process.env.DESKPRO_URL || ''),
  EASYVISTA_AUTH_CODE: JSON.stringify(process.env.EASYVISTA_AUTH_CODE || ''),
  NODE_ENV: '"development"',
  URL_API: '"https://dev.api.wirelessanalytics.com"',
  URL: '"https://dev.wirelessanalytics.com"',
  CLIENT_ID: '"2"',
  CLIENT_SECRET: JSON.stringify(process.env.CLIENT_SECRET || ''),
  LEGACY_URL: '"https://dev.legacy.wirelessanalytics.com"',
  SUPPORT_EMAIL: '"evprod@wirelessanalytics.com"',

  FEATURESV: {
    AWESOME_FEATURE: true,
    FEATURE_IN_DEVELOPMENT: true// isProduction() ? false : true,
  },

  EASYVISTA_CODE: 13,

  FEATURES: {
    "Procurements": {
      enabled: true,
      users: {
        "user@mail.com": true,
        "*@email.com": true
      }
    },
    "Packages": {
      enabled: true,
      users: {
        "user@mail.com": true,
        "*@email.com": true
      }
    },
    "Presets": {
      enabled: true,
      users: {
        "user@mail.com": true,
        "*@email.com": true
      }
    },
    "ManageDevices": {
      enabled: true,
      users: {
        "user@mail.com": true,
        "*@email.com": true
      }
    },
    "ManageServices": {
      enabled: true,
      users: {
        "user@mail.com": true,
        "*@wa.com": true
      }
    }
  },
  SUPPORT_EMAIL: '"product.support@wirelessanalytics.com"'

};
