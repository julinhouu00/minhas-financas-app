import React from "react"
import UsuarioService from "../app/service/usuarioService"
import LocalStorageService from "../app/service/localstorageService"


class Home extends React.Component{


state = {
    saldo: 0
}

constructor(){
    super()
    this.UsuarioService =  new UsuarioService()
}

componentDidMount(){
const usuarioLogado = LocalStorageService.addItem ('_usuario_logado')


this.UsuarioService
.obterSaldoPorUsuario(usuarioLogado.id)
.then(response =>{
    this.setState({
        saldo: response.data
    })
}).catch(error => {
    console.error(error.response)
})
}


    render(){
        return (

            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg"
                        href="#/cadastro-usuarios" role="button"><i className="fa fa-users"></i>
                        Cadastrar Usuário
                    </a>
                    <a className="btn btn-danger btn-lg"
                        href="https://bootswatch.com/flatly/#"
                        role="button"><i className="fa fa-users"></i>  
                        Cadastrar Lançamento</a>
                </p>
            </div>


        )
    }
}
export default Home;