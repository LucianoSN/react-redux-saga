import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import * as actionBooks from './actions';
import * as actionStocks from '../stock/actions';

import { actionBookTypes } from '../../../helpers/enums';

function* load() {
	try {
		const response = yield call(api.get, 'books');
		const shelve = response.data;

		const stock = shelve.reduce((total, item) => total + item.stock, 0);

		yield put(actionBooks.loadSuccess(shelve));
		yield put(actionStocks.load(stock));
	} catch (e) {
		yield put(actionBooks.failure());
	}
}

export default all([takeLatest(actionBookTypes.LOAD_REQUEST, load)]);
