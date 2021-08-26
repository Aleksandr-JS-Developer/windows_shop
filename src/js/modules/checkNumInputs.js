const checkNumInputs = selector => {
    const numInputs = document.querySelectorAll( selector );

    numInputs.forEach( item => {
        item.addEventListener('input', () => {
            let regExp = /[^+\d-]/g;
			item.value = item.value.replace( regExp, '' );
        });
    });
};

export default checkNumInputs;