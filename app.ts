export class User {
   name: string;
   proffession: string;
   constructor(proffession: string,name: string){
       this.name = name;
       this.proffession =proffession;
   }
   
   getInfo(): string{
       console.log(this.name  + this.proffession);
       return this.name + this.proffession;
   }
   public get value() : string {
       return 
   }
}

const user = new User('Ashwani', 'Engineer');
const user1 = new User('Jane', 'SDE');