const hideBodyScroll = () => {
    document.body.classList.add( 'modal-open' );
}

const showBodyScroll = () => {
    document.body.classList.remove( 'modal-open' );
}

export const bindModal = ( triggerSelector, modalSelector, closeSelector, closeClickOverlay = true ) => {
    const triggers = document.querySelectorAll( triggerSelector ),
          modal = document.querySelector( modalSelector ),
          close = document.querySelector( closeSelector ),
          windows = document.querySelectorAll( '[data-modal]' );

    triggers.forEach( item => {
        item.addEventListener( 'click', e => {
            if( e.target !== undefined && e.target !== null ){
                e.preventDefault();
            }

            windows.forEach( item => {
                item.style.display = 'none';
            });
            
            modal.style.display = 'block';
            hideBodyScroll();
    
            const closeModal_btn = () => {
                windows.forEach( item => item.style.display = 'none' );
                modal.style.display = 'none';
                showBodyScroll();
                close.removeEventListener( 'click', closeModal_btn );
                modal.removeEventListener( 'click', closeModal_modal );
            }
    
            const closeModal_modal = e => {
                if( e.target === modal && closeClickOverlay ){
                    modal.style.display = 'none';
                    showBodyScroll();
                    close.removeEventListener( 'click', closeModal_btn );
                    modal.removeEventListener( 'click', closeModal_modal );
                    windows.forEach( item => item.style.display = 'none' );
                }
            }
            close.addEventListener( 'click', closeModal_btn );
            modal.addEventListener( 'click', closeModal_modal )
        });
    });
}

const showModalByTimeout = ( selector, time ) => {
    setTimeout(()=>{
        document.querySelector( selector ).style.display = 'block';
        hideBodyScroll();
    }, time);
}

const modals = () => {

    bindModal( '.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close' );
    bindModal( '.phone_link', '.popup', '.popup .popup_close' )

    bindModal( '.popup_calc_btn', '.popup_calc', '.popup_calc_close' );
    bindModal( '.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false );
    bindModal( '.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false );
    
    // showModalByTimeout( '.popup', 60000 );
};

export default modals;