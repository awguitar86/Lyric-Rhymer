import axios from 'axios';

const baseURL = 'http://rhymebrain.com/talk?function=getRhymes';

function getRhymes(word) {
    return axios
        .get(`${baseURL}&word=${word}`)
        .then( res => res )
        .catch( err => {throw err} );
}

export {
    getRhymes
};