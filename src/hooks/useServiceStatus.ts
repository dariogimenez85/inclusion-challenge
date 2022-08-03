import { useEffect, useState } from "react";
import getApiStatus from "../actions/getApiStatus";

export type ApiStatusData = {
    status: 'warning' | 'success' | 'danger',
    message: 'Loading' | 'Healthy' | 'Error',
    hostname: string,
    time: string
}

const useServiceStatus = (apiName: string, delay: number) => {

    const initialState: ApiStatusData = { status: 'warning', message: 'Loading', hostname: '', time: '' };
    const [data, setData] = useState(initialState);

    const getData = () => {
        getApiStatus(apiName)
            .then((res: any) => {
                setData(res);
            });
    }

    useEffect(() => {
        
        getData();

        const interval = setInterval(() => {
            getData()
        }, delay);

        return () => clearInterval(interval);

    }, []);

    return { data };
}

export default useServiceStatus;