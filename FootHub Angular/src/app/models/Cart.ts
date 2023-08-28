export class CartProduct{
    uId: number;
    pId: number;
    constructor(user: number,product : number)
    {
        this.uId=user;
        this.pId=product;
    }
}