export class Register {
    username:string;
    password:string;
    mobileNumber:any;
    role:String;
    constructor(username:string,password:string,mobileNumber:any,role:String){
        this.username=username;
        this.password=password;
        this.mobileNumber=mobileNumber;
        this.role=role;
    }
    saveData(data1:Register){
        this.username=data1.username;
        this.password=data1.password;
        this.mobileNumber=data1.mobileNumber;
        this.role=data1.role;
        console.log(this.username);
        console.log(this.password);
        console.log(this.mobileNumber);
        console.log(this.role);
    }
}
