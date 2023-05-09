import axios from 'axios';

export default function getUserData(){
    const url='http://www.jerrymc.cn:90'
    if('authKey' in cookie.loadAll()){
      axios.get(url+'/auth/info')
        .then(response => {
            return JSON.parse(response.data)
        })
        .catch(error => return({success:false,msg:error}));
    }
    else{
        return false
    }
}