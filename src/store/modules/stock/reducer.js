import produce from 'immer';
import { actionStockTypes } from '../../../helpers/enums';

const INITIAL_STATE = {
	total: null,
};

const stock = (state = INITIAL_STATE, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case actionStockTypes.LOAD:
				draft.total = action.payload.stock;
				break;
			case actionStockTypes.FAILURE:
				break;
			default:
		}
	});
};

export default stock;
