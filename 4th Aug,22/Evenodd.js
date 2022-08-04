function myFun(){
    let a=document.getElementById("number").value;
    a=Number(a);
    if(a%2==0){
        alert("Number is even");
    }
    else{
        alert("Number is odd");
    }
}