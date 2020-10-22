export interface Product{
    Id: number,
    Name: string,
    Gender: string,
    Breed: string,
    Birth: string
}

export class BasketStateModel{
    products: Product[];
}