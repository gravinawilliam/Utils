export default class Whatsapp {
  generateLink(phone: string, message?: string): string {
    //Phone with DDD. Example: 5513988888888

    const formatedPhone = phone.trim();
    let link;

    if(!message) {
      link = `https://api.whatsapp.com/send?phone=${ formatedPhone }`;
    }
    else {
      const formatedMessage = message.split(' ').join('%20');
      link = `https://api.whatsapp.com/send?phone=${ formatedPhone }&text=${ formatedMessage }`;
    }

    return link;
  }
}