﻿import axios from 'axios';
import constants from '../Constants';

const getBooks = (txt) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${txt}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const addBook = (myLibrary) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`api/booksItem`, myLibrary)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(console.error('Error in addingBook request', err))
            })
    });
};

const addWishList = (wishList) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`api/booksItem/wishBookItem`, wishList)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(console.error('Error in adding wishList request', err))
            })
    });
};

const getMyLibrary = () => {
    return new Promise((reslove, reject) => {
        axios
            .get(`api/booksItem`)
            .then((res) => {
                reslove(res.data);
            })
            .catch((err) => {
                reject(console.error('error in getting myLibrary', err))
            })
    })
}

const getWishList = () => {
    return new Promise((reslove, reject) => {
        axios
            .get(`api/booksItem/wishList`)
            .then((res) => {
                reslove(res.data);
            })
            .catch((err) => {
                reject(console.error('error in getting myLibrary', err))
            })
    })
}

const deleteBook = (pk_id) => {
    console.log('stuff');
    return new Promise((resolve, reject) => {
        axios
            .delete(`api/booksitem/${pk_id}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}
 
export default {
    getBooks, addBook, addWishList, getMyLibrary, getWishList, deleteBook
};