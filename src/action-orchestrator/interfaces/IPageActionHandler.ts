import { IPageAction } from './IPageAction';

export interface IPageActionHandler {
	dispatch(action: IPageAction): Promise<void>;
}
