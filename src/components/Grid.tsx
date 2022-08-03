import Card from "./Card";
import data from '../data/services.json';

const Grid = () => {
    const itemList = data.services.map((item) => {
        return (
            <Card data={item} delay={data.refresh_time} key={item.name} />
        );
    })

    return (
        <div className="container-sm">
            {itemList}
        </div>
    );
}

export default Grid;