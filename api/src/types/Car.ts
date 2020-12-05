export interface ICarService {
	getAll(): Promise<ICar[]>;
	getOne(id: string): Promise<ICar>;
}

export interface ICar {

}