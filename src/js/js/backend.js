
// const _server = 'http://192.168.0.110:3000';
// const port = 7359;
// const ip = '127.0.0.1';
// const _server = `http://${ip}:${port}`;

const _server = `http://127.0.0.1:7359`;

// const _server = config.fetchUrl;

const _headers = {
    'Access-Control-Allow-Hseaders': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
    'Access-Control-Allow-Origin': 'no-cors',
    'Content-Type': 'application/json'
}
export async function request ( url, method = 'GET', data = null ){
    try {
        let body;
        if ( data !== null ) {
            body = JSON.stringify( data );
            console.log( {url: _server+url,method,data} );
        }
        const response = await fetch( _server+url, {
            method,
            headers: _headers,
            body
        });
        return await response.json();
    } catch ( e ) {
        console.warn( e );
    }
}