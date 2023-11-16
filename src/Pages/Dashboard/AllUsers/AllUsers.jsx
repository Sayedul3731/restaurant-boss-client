import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h1 className="text-3xl">All Users</h1>
                <h1 className="text-3xl">Total Users: {users.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        users.map(user =>  <tr key={user._id} className="bg-base-200">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;