import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20 '>
            <SectionTitle
            subHeading='check it out'
            heading='Featured Item'
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pb-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-8'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ducimus, accusamus officiis consequatur totam vel voluptatum doloribus soluta quidem, placeat labore suscipit illum necessitatibus natus culpa dolorum possimus tempore odio nam. Tempore repellat obcaecati mollitia ad consectetur accusantium ullam iste deserunt sapiente minima, ex autem, quaerat doloremque culpa facere illo? </p>
                    <button className='btn btn-outline text-white mt-5 border-0 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;