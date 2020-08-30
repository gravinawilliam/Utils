import swal from 'sweetalert';

export async function alertRequiredFields(): Promise<void> {
  swal({
    title: "Atenção",
    text: "Preencha corretamente todos os campos!",
    icon: "info",
  });
}

export async function alertUserNotFound(): Promise<void> {
  swal({
    title: "Usuário não encontrado",
    text: "Esse usuário não está cadastrado no sistema!",
    icon: "error",
  });
}

export async function alertUserisRegistered(): Promise<void> {
  swal({
    title: "Usuário já cadastrado",
    text: "Você já está cadastrado no sistema!",
    icon: "warning",
  });
}

export async function alertRegisterFails(): Promise<void> {
  swal({
    title: "Falho no cadastro",
    text: "Tente novamente!",
    icon: "error",
  });
}

export async function alertUpdateFails(): Promise<void> {
  swal({
    title: "Falho na atualização",
    text: "Tente novamente!",
    icon: "error",
  });
}