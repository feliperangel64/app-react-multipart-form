import React, { useState } from "react";
import { TextField, Button} from "@material-ui/core";

function DadosEntrega({aoEnviar}) {

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        aoEnviar({cep, endereco, numero, estado, cidade})
    }}>

      <TextField
        id="cep"
        type="number"
        label="Cep"
        variant="outlined"
        margin="normal"
        fullWidth
        value={cep}
        onChange={(e)=>{setCep(e.target.value)}}
      />

      <TextField
        id="endereco"
        type="text"
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
        value={endereco}
        onChange={(e)=>{setEndereco(e.target.value)}}
      />

      <TextField
        id="numero"
        type="number"
        label="Número"
        variant="outlined"
        margin="normal"
        value={numero}
        onChange={(e)=>{setNumero(e.target.value)}}
      />

      <TextField
        id="estado"
        type="text"
        label="Estado"
        variant="outlined"
        margin="normal"
        value={estado}
        onChange={(e)=>{setEstado(e.target.value)}}
      />

      <TextField
        id="cidade"
        type="text"
        label="Cidade"
        variant="outlined"
        margin="normal"
        value={cidade}
        onChange={(e)=>{setCidade(e.target.value)}}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
