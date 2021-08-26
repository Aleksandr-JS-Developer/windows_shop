import { request } from '../js/backend.js';
import checkNumInputs from './checkNumInputs.js';

const _forms = state => {
	const forms = document.querySelectorAll( 'form' );
	const inputs = document.querySelectorAll( 'input' );
	checkNumInputs( 'input[name="user_phone"]' );

	let clearUserInput = true;
	const messege = {
		loading: 'Загрузка',
		succsess: 'Спасибо! Скоро мы с вами свяжемся.',
		failure: 'Что-то не так..'
	};

	const postData = async ( url, data ) => {
		let res = await request( url, 'POST', data );
		if ( res === undefined ) {
			console.warn( 'res === undefined' );

		}
		return res;
	};	
	const clearInputs = () => inputs.forEach( item => item.value = null );

	forms.forEach( form => {
		form.addEventListener( 'submit', e => {
			e.preventDefault();

			const statusMessege = document.createElement( 'div' );
			statusMessege.classList.add( 'status' );
			form.appendChild(statusMessege );

			const userName = form.querySelector( 'input[name="user_name"]' ).value;
			const userPhone = form.querySelector( 'input[name="user_phone"]' ).value;

			const formData = {
				user_name: userName,
				user_phone: userPhone
			}

			if( form.getAttribute( 'data-calc' ) === 'end' ){
				formData.calcValue = {...state};
				console.log( formData );
			}			
			statusMessege.textContent = messege.loading;
			postData( '/delay4', formData )
				.then( res => {
					if( res !== undefined ){
						statusMessege.textContent = messege.succsess;
						console.log( 'server unsver:', res );
					} else {
						throw 1;
					}
				})
				.catch( err => {
					console.error( 'error', err );
					statusMessege.textContent = messege.failure;
					clearUserInput = false;
				})
				.finally( () => {
					if( clearUserInput ) clearInputs();
					setTimeout( () => {
						statusMessege.remove();
					}, 7000 );
				});
		});
	});
}

// const calcule = (h1,h2,h3) => (h1*132/(h2*3))*h3 // :D


export default _forms;