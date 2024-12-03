export interface IStudent{
    id: number;
    name: string;
  }
  
  export class Student implements IStudent{
    constructor(id: number, name: string){
      this.id = id;
      this.name = name;
    }
  
    id: number;
    name: string;
  
  }