function returnCPF(cpf: string | number){
    console.log(cpf)
}

returnCPF('60041219')
returnCPF(40028922)

type bird = {
    especie: string,
    idade: number,
    extinto: boolean,
}

function returnBird(bird: bird){
    console.log(bird);
}

returnBird({ especie: 'pedro', idade:21, extinto:false })