import axios from "axios";
import { useEffect, useState } from "react";

const Card = (props: any) => {
    const [data, setData] = useState({ success: true, status: 'warning', message: 'Loading', hostname: '', time: '' });

    useEffect(() => {
        axios.get(`https://api.factoryfour.com/${props.data.name}/health/status`)
            .then(res => {
                const t = new Date(res.data.time);
                const time = t.getHours().toString().padStart(2, '0')
                    + ':' + t.getMinutes().toString().padStart(2, '0')
                    + ':' + t.getSeconds().toString().padStart(2, '0');

                setData({ success: true, status: 'success', message: 'Healthy', hostname: res.data.hostname, time: time });
            })
            .catch(err => {
                setData({ success: false, status: 'danger', message: 'Error', hostname: '', time: '' });
            });
    }, [])

    return (
        <div className='row mt-3 border-bottom'>
            <div className='col col-3'>{props.data.name.toUpperCase()}</div>
            <div className='col col-3'>{data.hostname}</div>
            <div className='col col-4'>{data.time}</div>
            <div className={`col col-2 text-light text-center bg-${data.status}`}>{data.message}</div>
        </div>
    );

}

export default Card;