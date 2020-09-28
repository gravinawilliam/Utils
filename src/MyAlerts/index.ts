import swal from 'sweetalert';

export default class MyAlerts {
  async alertWarning(title: string, message: string): Promise<void> {
    swal({
      title,
      text: message,
      icon: "info",
    });
  }

  async alertError(title: string, message: string): Promise<void> {
    swal({
      title,
      text: message,
      icon: "error",
    });
  }

  async alertInformation(title: string, message: string): Promise<void> {
    swal({
      title,
      text: message,
      icon: "info",
    });
  }

  async alertSuccess(callbackFunction: () => void, title: string, message: string,): Promise<void> {
    return swal({
      title,
      text: message,
      icon: "success",
    }).then((value) => {
      if(value || value === null) {
        callbackFunction();
      }
    });
  }
}