export function removeKey(key: string, local: 'localStorage' | 'sessionStorage'): void {
  if(local === "localStorage") {
    localStorage.removeItem(key);
  }

  else {
    sessionStorage.removeItem(key);
  }
}

export function setDataObject(key: string, dataObject: any, local: 'localStorage' | 'sessionStorage'): void {
  const parsed = JSON.stringify(dataObject);

  if(local === 'localStorage') {
    cleanLocalStorage();
    localStorage.setItem(key, parsed);
  }

  else {
    cleanSessionStorage();
    sessionStorage.setItem(key, parsed);
  }
}

export function getDataObject(key: string, local: 'localStorage' | 'sessionStorage'): object | null {
  let data;

  if(local === 'localStorage') {
    data = localStorage.getItem(key);
  }

  else {
    data = sessionStorage.getItem(key);
  }

  if(data !== null) {
    return JSON.parse(data);
  }

  else {
    return null;
  }
}

export function cleanSessionStorage(): void {
  sessionStorage.clear();
}

export function cleanLocalStorage(): void {
  localStorage.clear();
}
