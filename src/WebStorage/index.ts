export default class WebStorage {
  removeKey(key: string, local: 'localStorage' | 'sessionStorage'): void {
    if(local === "localStorage")
      localStorage.removeItem(key);

    else
      sessionStorage.removeItem(key);
  }

  setDataObject(key: string, dataObject: any, local: 'localStorage' | 'sessionStorage'): void {
    const parsed = JSON.stringify(dataObject);

    if(local === 'localStorage') {
      this.cleanLocalStorage();
      localStorage.setItem(key, parsed);
    }

    else {
      this.cleanSessionStorage();
      sessionStorage.setItem(key, parsed);
    }
  }

  getDataObject(key: string, local: 'localStorage' | 'sessionStorage'): object | null {
    let data;

    if(local === 'localStorage')
      data = localStorage.getItem(key);

    else
      data = sessionStorage.getItem(key);

    if(data !== null)
      return JSON.parse(data);

    else
      return null;
  }

  cleanSessionStorage(): void {
    sessionStorage.clear();
  }

  cleanLocalStorage(): void {
    localStorage.clear();
  }
}
