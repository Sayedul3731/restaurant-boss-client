
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
        const [menu] = useMenu()
        const popular = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <SectionTitle
                heading='From Our Menu'
                subHeading='Popular Menu'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-4 my-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className='btn btn-outline mt-5 border-0 border-b-4'>View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;