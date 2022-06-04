import { rm } from '../../utils/storage';
import { AdminType } from '../../types/AdminType';
import { Dispatch } from 'redux'

export interface AdminAction {
	type: AdminType,
	data?: any
}

export const doLogin = (dispatch: Dispatch, admin: any) => {
	dispatch({ type: AdminType.LOGIN, data: { admin, loading: false } })
}

export const logout = (dispatch: Dispatch) => {
	rm('token')
	dispatch({
		type: AdminType.LOGOUT
	})
}