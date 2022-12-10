import { getToken, makeUrl } from "../utils/makeReq";

export class Api {
    public async request<Returned>(params: any):Promise<Returned>{
        try {
            const token = getToken()
            const request = await (await fetch(makeUrl(params.url), 
                {
                    method: params.method, 
                    headers: new Headers({
                        "Authorization":  token ? `Bearer ${token}` : "",
                        "Content-type": "application/json",
                    })
                }
            )).json()
            return request
        } catch (error:any) {
            return error
        }
        
        
    }
}