export interface IAdmin {
	_id: number;
	avatar: string;
	username: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface AdminState {
	admin: IAdmin;
	currentPath: string;
}