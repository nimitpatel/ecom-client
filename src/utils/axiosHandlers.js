import axios from 'axios'
import { host } from '../config'
import { getCookie } from './getCookie'

const token = getCookie('ecom')

axios.defaults.withCredentials = false // make it true on production
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const get = (path, data, options = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .get(host + path, {
                params: data,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                ...options
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const post = (path, data, options = {}) => { 
    return new Promise((resolve, reject) => {
        axios
            .post(host + path, data, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                ...options
            })
            .then(res => {
                if (res.data.code) {
                    console.log("Success")
                } 
                resolve(res.data)
            })
            .catch(err => { 
                reject(err)
            })
    })
}

export const patch = (path, data, options = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .patch(host + path, data, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                ...options
            })
            .then(res => {
                if (res.data.code) {
                    console.log("Success")
                }
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const deleteReq = (path, data, options = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(host + path,
                { data }, 
                {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                ...options
            })
            .then(res => {
                if (res.data.code) {
                    console.log("Success")
                }
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}