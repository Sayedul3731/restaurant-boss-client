/* eslint-disable react/prop-types */
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom"


const MenuCategory = ({ items, title, img }) => {
   
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>

            <div className="flex justify-center mb-8">
                <Link className="" to={`/order/${title}`}>
                    <button className='btn btn-outline mt-5 border-0 border-b-4'>Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;