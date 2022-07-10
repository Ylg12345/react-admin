import { AdminType } from '../../types/AdminType';
import { Dispatch } from 'redux'

export const setLogin = (dispatch: Dispatch, data: any) => {
	dispatch({ type: AdminType.LOGIN, data })
}

export const setCurrentPath = (dispatch: Dispatch, data: any) => {
	dispatch({ type: AdminType.SET_CURRENT_PATH, data })
};
