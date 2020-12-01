class DataHelper{
    constructor(){
        throw new Error('DataHelper não pode ser instanciada')
    }
    
    static converterStringParaData(dataString) {
        const [ano, mes, dia] = dataString.split('-')
    
        return new Date(
            Number(ano),
            Number(mes) - 1,
            Number(dia)
        )
    }

    static formatarData(data){
        
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }
    
}