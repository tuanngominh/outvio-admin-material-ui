[demo](https://tuanngominh.github.io/outvio-admin-material-ui)

# Style
Using color code from [material-ui.com/#/customization/colors](http://www.material-ui.com/#/customization/colors)

The style customization (e.g. color, padding) will be defined in the custom theme `src/muiTheme.js`. The one which can't put in custom theme, they will be define as inline style in component or in SASS code (for media query style)

# To do
- Drawer:
    - Click menu item will auto close the drawer
    - Change color of menu item's selected state
    - May be we need drawer docked on none mobile viewport
- Refactor component style code for serverside rendering. Options:
    - https://github.com/FormidableLabs/radium
    - https://www.npmjs.com/package/styled-jsx
- Order Items
    - Only reduce column padding in mobile viewport
- Move custom color code to theme object