import useServiceStatus, { ApiStatusData } from "../hooks/useServiceStatus";

const Card = (props: any) => {
    const apiName: string = props.data.name;
    const delay: number = props.delay;

    const { data } = useServiceStatus(apiName, delay);

    return (
        <div className='col p-1'>
            <div className="card border-0 h-100 shadow p-1 mb-3 rounded  text-center">
                <div className='card-header'>{apiName.toUpperCase()}</div>
                <div className={`text-light bg-${(data as ApiStatusData).status}`}>{(data as ApiStatusData).message}</div>
                <div className=''>{(data as ApiStatusData).hostname} &nbsp;</div>
                <div className=''>{(data as ApiStatusData).time} &nbsp;</div>
            </div>
        </div>
    );

}

export default Card;