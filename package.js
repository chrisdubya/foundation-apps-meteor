Package.describe({
  name: 'chrisdubya:foundation-apps',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Foundation Apps Meteor Package with SCSS and JS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/chrisdubya/foundation-apps-meteor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles([
      // JS
      'js/foundation-apps.js',
      'js/foundation-apps-templates.js',

      // SCSS
      '_foundation.scss',
      '_settings.scss',

      'scss/foundation.scss',
      'scss/vendor/_normalize.scss',

      'scss/helpers/_functions.scss',
      'scss/helpers/_mixins.scss',
      'scss/helpers/_breakpoints.scss',
      'scss/helpers/_images.scss',

      'scss/_global.scss',
      'scss/_includes.scss',
      'scss/_settings.scss',

      'scss/components/_iconic.scss',
      'scss/components/_action-sheet.scss',
      'scss/components/_block-list.scss',
      'scss/components/_button.scss',
      'scss/components/_button-group.scss',
      'scss/components/_card.scss',
      'scss/components/_extras.scss',
      'scss/components/_forms.scss',
      'scss/components/_panel.scss',
      'scss/components/_grid.scss',
      'scss/components/_title-bar.scss',
      'scss/components/_label.scss',
      'scss/components/_list.scss',
      'scss/components/_menu-bar.scss',
      'scss/components/_modal.scss',
      'scss/components/_motion.scss',
      'scss/components/_notification.scss',
      'scss/components/_off-canvas.scss',
      'scss/components/_popup.scss',
      'scss/components/_switch.scss',
      'scss/components/_tabs.scss',
      'scss/components/_accordion.scss',
      'scss/components/_typography.scss',
      'scss/components/_utilities.scss'
  ], 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('chrisdubya:foundation-apps');
  api.addFiles('foundation-apps-tests.js');
});
