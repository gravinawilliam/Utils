export function toBrazilianDateFormat(unformattedDate: string): string {
  // unformattedDate = '2001/10/30'

  const parts = unformattedDate.split("/");
  const formatedDate = (parts[ 2 ], parts[ 1 ], parts[ 0 ]);

  //formatedDate = '30/10/2001'
  return formatedDate;
}