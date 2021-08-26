// import { bindModal } from './modals';

const calc = () => {

	const width = document.getElementById( 'width' ),
		  height = document.getElementById( 'height' );

	
	const exceptNumbers = e => e.target.value = e.target.value.replace( /[^\d]/g, '' );

	width.addEventListener( 'input', exceptNumbers );
	height.addEventListener( 'input', exceptNumbers );


}

export default calc;