//component
class AbcComponent{

id:number=10;
setId(data:number){
    this.id=data;

}

}

function AbcComponent(){

    this.id=10;

}
AbcComponent.prototype.setId=function(data){ this.id=data};


// Rx js

subscribe(this.setId){
    callbackRef=setId;
}
invokeCallback(){
    callbackRef.apply(undefined,100);
}