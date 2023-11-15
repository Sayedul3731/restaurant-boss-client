import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div className="mt-10">
            <div className="flex justify-evenly">
                <h2 className="text-4xl"> Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL. No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => <tr key={item._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-lg text-red-500">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            </tr> )
                        }
                        
                    </tbody>
                

                </table>
            </div>
        </div>
    );
};

export default Cart;