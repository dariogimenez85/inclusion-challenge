import Card from "./Card";
import data from '../data/services.json';

const Grid = () => {
    const itemList = data.services.map((item) => {
        return (
            <Card data={item} delay={data.refresh_time} key={item.name} />
        );
    })

    return (
        <div className="container">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 mt-5">
                {itemList}
            </div>
        </div>
    );
}

export default Grid;