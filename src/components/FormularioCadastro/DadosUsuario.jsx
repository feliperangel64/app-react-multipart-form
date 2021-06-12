import React, { useState, useContext } from "react";
import { TextField, Button} from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}) {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validaCampos, possoEnviar] = useErros(validacoes);
  
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        if(possoEnviar())aoEnviar({email, senha});
    }}>
      
      <TextField
        id="email"
        type="email"
        label="Email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
      />

      <TextField
        id="senha"
        type="password"
        name="senha"
        label="Senha"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        value={senha}
        onChange={(e)=>{setSenha(e.target.value)}}
        onBlur={validaCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
