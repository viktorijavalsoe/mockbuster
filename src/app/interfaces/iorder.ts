export interface IOrder {
  id : number,
  companyId : number,
  created : string,
  createdBy : string,
  payment : string,
  totalPrice : number,
  status: number,
  orderRows : [] 
}
