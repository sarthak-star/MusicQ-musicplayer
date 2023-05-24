import axios from "axios";

const authendpoint= "https://accounts.spotify.com/authorize?";
const clientID="516c60a1cd264d4ebfd547ff1d326a1a";
const redirecrURL= "http://localhost:3000";
const scopes=["user-library-read","playlist-read-private"];

export const loginEndpoint=`${authendpoint}client_id=${clientID}&redirect_uri=${redirecrURL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
const apiclient=axios.create({
    baseURL:"https://api.spotify.com/v1/"

});
export const setclientToken=(token)=>{
    apiclient.interceptors.request.use(async function(config){
        config.headers.Authorization="Bearer " + token;
        return config;
    });
};
export default apiclient;
