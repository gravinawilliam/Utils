function convertSecondsInTime(seconds: number): string {
  const secondsInMinute = 60;
  const secondsInHour = 3600; //60 * 60

  const hour = seconds / secondsInHour;
  const minutes = ((seconds / secondsInMinute) - (hour * secondsInMinute));
  const rest_seconds = seconds - (hour * secondsInHour) - (minutes * secondsInMinute);

  return `${ hour }h ${ minutes }m ${ rest_seconds}s`;

}