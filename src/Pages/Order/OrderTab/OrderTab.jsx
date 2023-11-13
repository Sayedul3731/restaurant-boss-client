/* eslint-disable react/prop-types */
import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                items.map(item => <FoodCard
                key={item._id}
                item={item}
                >
                </FoodCard>)
            }
        </div>
    );
};

export default OrderTab;