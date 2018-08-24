import test from 'tape';

import { fetchBooks } from './sagas'

test('fetchBooksAsync Saga test', (assert) => {
    const gen = fetchBooks()

});