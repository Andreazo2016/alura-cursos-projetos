class NegociacoesView extends View {

    constructor(elementoDom){
        super(elementoDom)
    }

    template(listaDeNegociacoes) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
            ${listaDeNegociacoes.map(negociacao => {
            return `
                    <tr>
                        <td>${DataHelper.formatarData(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                `
        }).join('')}
            </tbody>
                <td colspan="3"></td>
                <td>${listaDeNegociacoes.reduce((sum, {volume}) => Number(sum) + volume, 0)}</td>
            <tfoot>
            </tfoot>
        </table>
        `;
    }

}
