const tabs = ( headerSelector, tabSelsector, contentSelector, activeClass, activeDisplay = 'block' ) => {
	const header = document.querySelector( headerSelector ),
	tab = document.querySelectorAll( tabSelsector ),
	content = document.querySelectorAll( contentSelector );

	const hideTabContent = () => {
		content.forEach( item => {
			item.style.display = 'none';
		});

		tab.forEach( item => {
			item.classList.remove( activeClass );
		});
	}
	const showTabContent = (i = 0) => {
		content[i].style.display = activeDisplay;
		tab[i].classList.add( activeClass );
	}

	hideTabContent();
	showTabContent();

	header.addEventListener( 'click', e => {
		const target = e.target;
		const tab_selsector = tabSelsector.replace( /\./, '' );
		const state = target && (target.classList.contains( tab_selsector ) || target.parentNode.classList.contains( tab_selsector ))

		if( state ){
			tab.forEach( ( item, i ) => {
				if( target === item || target.parentNode === item ){
					hideTabContent();
					showTabContent( i );
				}
			});
		}
	});
}

export default tabs;