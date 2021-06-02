
const DEV = {
    host: 'http://localhost:5000',
    stripe: ''
}

const PROD = {
    host: 'https://ecom-api.proffie.me',
    stripe: ''
}

module.exports = process.env.REACT_APP_ENV === 'PROD' ? PROD : DEV