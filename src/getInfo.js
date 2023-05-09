import axios from 'axios';
import cookie from 'react-cookies';

export default function getUserData(){
    const url='http://www.jerrymc.cn:90'
    if('authKey' in cookie.loadAll()){
      axios.get(url+'/auth/info')
        .then(response => {
            return JSON.parse(response.data)
        });
    }
    else{
        return false
    }
}