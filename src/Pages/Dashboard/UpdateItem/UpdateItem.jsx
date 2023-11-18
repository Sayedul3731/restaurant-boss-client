import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const { name, category, price, recipe,_id } = useLoaderData();
    console.log(name, category, price, recipe,_id );

    const { register, handleSubmit } = useForm({defaultValues:{
        name,
        price
    }})
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        console.log('image in update component', res.data.data.display_url);
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log('update an item', menuRes.data);
        if (menuRes.data.modifiedCount > 0 ) {
            Swal.fire({
                title: "Success!",
                text: `${data.name} updated as an Item.`,
                icon: "success"
            });
        }
    }
    return (
        <div className="px-10">
            <SectionTitle heading="update an item" subHeading="refresh"></SectionTitle>
            <form className="p-10 bg-base-300" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" defaultValue={name}  placeholder="Type here" {...register('name', { required: true })} className="input input-bordered w-full" />
                </div>
                <div className="my-5 flex">
                    <div className="w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="text" defaultValue={price} placeholder="Price here" {...register('price', { required: true })} className="input input-bordered w-full" />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea placeholder="Recipe Details" defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <input type="file" {...register('image', { required: true })} className="file-input w-full max-w-xs my-5" />
                <br />
                <input className="bg-orange-500 text-white px-3 py-1 font-semibold rounded-sm" type="submit" />
            </form>
        </div>
    );
};

export default UpdateItem;