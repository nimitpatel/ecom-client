
const DEV = {
    host: 'http://localhost:5000',
    stripe: ''
}

const PROD = {
    host: 'https://api-for-ecom.herokuapp.com',
    stripe: ''
}

module.exports = process.env.REACT_APP_ENV === 'PROD' ? PROD : DEV