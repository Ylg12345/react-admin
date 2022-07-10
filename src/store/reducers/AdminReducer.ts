import { AdminType } from '../../types/AdminType';
import { AdminState } from '../../types/AdminState';

interface AdminAction {
	type: AdminType,
	data: any
}

const initAdminState: AdminState = {
	admin: {
		_id: 0,
		avatar: '',
		username: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	currentPath: '/admin/dashboard'
}

const admin = (state: AdminState = initAdminState, action: AdminAction): AdminState => {
	switch (action.type) {
		case AdminType.LOGIN:
			return { ...state, ...action.data }
		case AdminType.SET_CURRENT_PATH:
			return { ...state, ...action.data }
		default:
			return state
	}
}

export default admin