import axios from 'axios';

const backUrl = "http://localhost:8787/swith/";
const followback = () => {};

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;  //쿠키정보 넘겨주기

Followback.get = async (uri) => {

    let data = []

    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    try {
        data = await axios.get('${uri}', config);
        console.log(data);
    } catch (error){
        console.log(error);
    }

    return data;
}

Followback.getWithHeader = async (uri, token) => {

    let data = [];

    const config = {
        header: { 
            'Content-Type': 'application/json',
            'Authorization': "bearer "+token
        }
    };
    try {
        data = await axios.get(`${uri}`, config);
    } catch (error) {
        console.error(error);
    }

    return data;
}

Followback.post = async (uri, body) => {
    let resData = {};
    const config = {'Content-Type': 'application/json'};
    try {
       resData = axios.post(`${uri}`, body, config);
    } catch (error) {
        console.error(error);
    }
    
    return resData;
}

Followback.postWithHeader = async (uri, body, token) => {
    let resData = {};
    const config = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
    try {
       resData = axios.post(`${uri}`, body, config); 
    } catch (error) {
        console.error(error);
    }
    
    return resData;
}

export default Followback;