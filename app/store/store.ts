import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(isServer);

class Store {
  private isAuth: boolean = false;
  

  setAuth = (val: boolean) => {
    this.isAuth = val
  }
  getAuth = () => {
    return this.isAuth
  }

  constructor(){
    makeAutoObservable(this)
  }
}

const  mainStore = new Store()
export default mainStore