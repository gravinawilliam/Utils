export default  class Time {
  readonly months = [
    'Janeiro', 'Fevereiro', 'Março',
    'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro',
    'Outubro', 'Novembro', 'Dezembro'
  ];

  readonly weekdays = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
  ];

  readonly weekdaysShort = [
    'Seg', 'Ter', 'Qua', 'Qui',
    'Sex', 'Sab', 'Dom'
  ];

  convertSecondsInTime(seconds: number): string {
    const secondsInMinute = 60;
    const secondsInHour = 3600; //60 * 60

    const hour = seconds / secondsInHour;
    const minutes = ((seconds / secondsInMinute) - (hour * secondsInMinute));
    const rest_seconds = seconds - (hour * secondsInHour) - (minutes * secondsInMinute);

    return `${ hour }h ${ minutes }m ${ rest_seconds }s`;
  }

  toBrazilianDateFormat(unformattedDate: string): string {
    // unformattedDate = '2001/10/30'

    const parts = unformattedDate.split("/");
    const formatedDate = (parts[ 2 ], parts[ 1 ], parts[ 0 ]);

    //formatedDate = '30/10/2001'
    return formatedDate;
  }
}
