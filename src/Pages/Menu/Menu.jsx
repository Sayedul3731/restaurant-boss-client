import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import bannerBg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Restaurant Boss | Menu</title>
            </Helmet>
            <Cover img={bannerBg} title='our menu'></Cover>

            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items  */}
            <MenuCategory items={offered}></MenuCategory>
            
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            {/* soups menu items  */}
            <MenuCategory items={soups} title="soup" img={soupImg}></MenuCategory>
            {/* salads menu items  */}
            <MenuCategory items={salads} title="salad" img={saladImg}></MenuCategory>
            {/* pizzas menu items  */}
            <MenuCategory items={pizzas} title="pizza" img={pizzaImg}></MenuCategory>
          
        </div>
    );
};

export default Menu;