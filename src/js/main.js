import './slider';

import modals from './modules/modals.js';
import tabs from './modules/tabs.js'
import forms from './modules/forms.js';
import calc from './modules/calc.js';
import changeModalState from './modules/changeModalState';



window.addEventListener( 'DOMContentLoaded', () => {
    "use strict";
    
    let modalState = {
        form: 0,
        height: "0",
        profile: "Тёплое",
        type: "tree",
        width: "0"
    };
    changeModalState( modalState );

    console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);
    modals();
    tabs( '.glazing_slider', '.glazing_block', '.glazing_content', 'active' );
    tabs( '.decoration_slider', '.no_click', '.decoration_content>div>div', 'after_click' );
    tabs( '.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block' );

    forms( modalState );
    calc();

});
