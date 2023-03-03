function a(){
    console.log("executando A")
}

function b(){
    console.log("executando B")
}

function c(){
    console.log("executando C")
    a()
    b()
}

c()