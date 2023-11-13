/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const { image, price, recipe, name} = item
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-slate-900 text-white px-3 py-1 right-0 mr-4 mt-4">${price}</p>
            <div className="card-body flex flex-1 items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 border-orange-300 bg-slate-200 text-orange-300">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;