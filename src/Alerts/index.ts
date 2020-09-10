import swal from 'sweetalert';

export default class Alerts {
  async alertRequiredFields(): Promise<void> {
    swal({
      title: "Atenção",
      text: "Preencha corretamente todos os campos!",
      icon: "info",
    });
  }

  async alertUserNotFound(): Promise<void> {
    swal({
      title: "Usuário não encontrado",
      text: "Esse usuário não está cadastrado no sistema!",
      icon: "error",
    });
  }

  async alertUserisRegistered(): Promise<void> {
    swal({
      title: "Usuário já cadastrado",
      text: "Você já está cadastrado no sistema!",
      icon: "warning",
    });
  }

  async alertRegisterFails(): Promise<void> {
    swal({
      title: "Falho no cadastro",
      text: "Tente novamente!",
      icon: "error",
    });
  }

  async alertUpdateFails(): Promise<void> {
    swal({
      title: "Falho na atualização",
      text: "Tente novamente!",
      icon: "error",
    });
  }
}
