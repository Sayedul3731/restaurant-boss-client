/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"


const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item;

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (food) => {
        if (user && user?.email) {
            console.log('yes', food);
            const cartItem = {
                itemId : _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added in the cart.`,
                        showConfirmButton: false,
                        timer: 3000
                      });
                }
            })

        } else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Are you want to log in?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes."
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-slate-900 text-white px-3 py-1 right-0 mr-4 mt-4">${price}</p>
            <div className="card-body flex flex-1 items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-orange-300 bg-slate-200 text-orange-300">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;