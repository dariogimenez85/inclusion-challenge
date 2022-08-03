import axios from "axios";

const getApiStatus = (apiName: String) => {
    return new Promise((resolve, reject) => {

        axios.get(`https://api.factoryfour.com/${apiName}/health/status`)
            .then(res => {
                const t = new Date(res.data.time);
                const time = t.getHours().toString().padStart(2, '0')
                    + ':' + t.getMinutes().toString().padStart(2, '0')
                    + ':' + t.getSeconds().toString().padStart(2, '0');

                resolve({ status: 'success', message: 'Healthy', hostname: res.data.hostname, time: time });
            })
            .catch(err => {
                resolve({ status: 'danger', message: 'Error', hostname: '', time: '' });
            });

    })

}

export default getApiStatus;