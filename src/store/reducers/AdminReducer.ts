import { AdminType } from '../../types/AdminType';
import { AdminAction } from '../actions/AdminAction';
import { AdminState } from '../../types/AdminState';

const initAdminState: AdminState = {
	loading: true,
	admin: {
		_id: 0,
		avatar: '',
		username: '',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}
const admin = (state: AdminState = initAdminState, action: AdminAction): AdminState => {
	switch (action.type) {
		case AdminType.LOADING:
			return { ...state, ...action.data }
		case AdminType.GET:
			return { ...state }
		case AdminType.SET:
			return { ...state, ...action.data }
		case AdminType.LOGIN:
			return { ...state, ...action.data }
		default:
			return state
	}
}
export default admin