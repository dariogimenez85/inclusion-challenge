import Card from "./Card";
import data from '../data/services.json';

const Grid = () => {
    const userList = data.services.map((item) => {
        return (
            <Card data={item} refresh={data.refresh_time} key={item.name} />
        );
    })

    return (
        <div className="container-sm">
            {userList}
        </div>
    );
}

export default Grid;