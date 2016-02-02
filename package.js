Package.describe({
    name: 'chrisdubya:foundation-apps',
    summary: 'Foundation Apps Wrapper for Meteor.',
    version: '1.0.2',
    git: 'https://github.com/chrisdubya/foundation-apps-meteor',
    documentation: 'meteor-README.md'
});

Npm.depends({
    'motion-ui': '1.1.0'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.imply('fourseven:scss@3.4.1');
    api.use(['ecmascript', 'jquery', 'fourseven:scss@3.4.1'], 'client');
    api.addFiles('.npm/package/node_modules/motion-ui/dist/motion-ui.css', 'client');
    api.addFiles('.npm/package/node_modules/motion-ui/dist/motion-ui.js', 'client');
    api.addFiles('dist/js/foundation-apps.js', 'client');
    api.addFiles('dist/js/foundation-apps-templates.js', 'client');
    api.addFiles([

        'scss/foundation.scss',
        'scss/_global.scss',
        'scss/_includes.scss',
        'scss/_settings.scss',

        'scss/components/_accordion.scss',
        'scss/components/_action-sheet.scss',
        'scss/components/_block-list.scss',
        'scss/components/_button-group.scss',
        'scss/components/_button.scss',
        'scss/components/_card.scss',
        'scss/components/_extras.scss',
        'scss/components/_forms.scss',
        'scss/components/_grid.scss',
        'scss/components/_iconic.scss',
        'scss/components/_label.scss',
        'scss/components/_list.scss',
        'scss/components/_menu-bar.scss',
        'scss/components/_modal.scss',
        'scss/components/_motion.scss',
        'scss/components/_notification.scss',
        'scss/components/_off-canvas.scss',
        'scss/components/_panel.scss',
        'scss/components/_popup.scss',
        'scss/components/_switch.scss',
        'scss/components/_tabs.scss',
        'scss/components/_title-bar.scss',
        'scss/components/_typography.scss',
        'scss/components/_utilities.scss',

        'scss/helpers/_breakpoints.scss',
        'scss/helpers/_functions.scss',
        'scss/helpers/_images.scss',
        'scss/helpers/_mixins.scss',

        'scss/vendor/_normalize.scss'

    ], 'client', {
        isImport: true
    });
});
