import useServiceStatus, { ApiStatusData } from "../hooks/useServiceStatus";

const Card = (props: any) => {
    const apiName: string = props.data.name;
    const delay:number = props.delay;

    const { data } = useServiceStatus(apiName, delay);

    return (
        <div className='row mt-3 border-bottom'>
            <div className='col col-3'>{apiName.toUpperCase()}</div>
            <div className='col col-3'>{(data as ApiStatusData).hostname}</div>
            <div className='col col-4'>{(data as ApiStatusData).time}</div>
            <div className={`col col-2 text-light text-center bg-${(data as ApiStatusData).status}`}>{(data as ApiStatusData).message}</div>
        </div>
    );

}

export default Card;