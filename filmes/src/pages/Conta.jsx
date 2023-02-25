import { useState } from 'react'
import './Conta.css'

export default function Conta(){

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [error, setError] = useState(false);

    function handleSenha(valor){
        setError(valor.length < 8)
        setSenha(valor)
    }

    return (
        <form className='form-conta'>
            <h2>Criar Conta</h2>
            <label htmlFor="nome">Nome</label>
            <input 
                type="text" 
                id='nome' 
                value={nome} 
                onChange={e => setNome(e.target.value)}
            />
            
            <label htmlFor="senha">Senha</label>
            <input 
                type="password" 
                id='senha' 
                value={senha} 
                onChange={e => handleSenha(e.target.value)}
            />
            { error && <span className='error'>senha muito curta</span>}
            

            <button disabled={error}>salvar</button>

        </form>
    )

}