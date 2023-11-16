import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers"><FaList></FaList> Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings"><FaBook/> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"><FaUsers></FaUsers> All Users</NavLink>
                            </li>
                        </>
                            : <>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaCalendar></FaCalendar>Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review"><FaAd></FaAd>Add A Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings"><FaList></FaList>My Bookings</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><FaSearch></FaSearch>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><FaEnvelope></FaEnvelope>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;