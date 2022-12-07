import { getCookie, CookieValueTypes } from "cookies-next"

export const makeUrl = (url: string) => {
    const SERVER = process.env.API
    let res = ""
    if(url[0] === "/"){
        res = SERVER + url
    } else{
        res = SERVER + "/" + url
    }
    return res
}
 
export const getToken = (): CookieValueTypes  => {
    const token = getCookie("token")
    return token
}