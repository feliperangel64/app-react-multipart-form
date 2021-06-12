export function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

export function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return {
      valido: false,
      texto: "A senha deve ter entre 4 e 72 caractesres.",
    };
  } else {
    return { valido: true, texto: "" };
  }
}
