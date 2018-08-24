import React from 'react';
import { fetchBooks } from './sagas'
import { put, call } from 'redux-saga/effects'
import API from '../API'


it('fetchBooksAsync Saga test', async () => {
    expect.assertions(2)
    const gen = fetchBooks()

    const books = await API.fetchBooks().then(res => {
        expect(gen.next().value).toEqual(call(API.fetchBooks))
    })

    expect(gen.next().value).toEqual(put({type: "FETCH_BOOKS_SUCCEEDED", books}))
});

// https://jestjs.io/docs/en/expect#toequalvalue

