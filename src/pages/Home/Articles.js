import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

const Articles = () => {
    return (
        <div>



            <div className='p-4'>
                <h1 className='lg:text-4xl text-[#39404a
] text-2xl font-bold text-center mt-12'>Read Our Articles</h1>
            </div>
            {/* <!-- component --> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        <div className="p-4 md:w-1/3">
                            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://mironmahmud.com/greeny/assets/ltr/images/blog/01.jpg" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">ADMIN</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3 hover:text-[#119744]">sriracha leggings jianbing microdosing tousled waistcoat-1</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <button className="text-[#119744] font-medium text-xl hover:scale-105 drop-shadow-md flex justify-center items-center gap-1 shadow-cla-blue hover:underline"><span>Learn more </span> <span classNameName='mt-1'><BsArrowRightShort size={20} /></span></button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://mironmahmud.com/greeny/assets/ltr/images/blog/02.jpg" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">ADMIN</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3 hover:text-[#119744]">sriracha leggings jianbing microdosing tousled waistcoat-1</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <button className="text-[#119744] font-medium text-xl hover:scale-105 drop-shadow-md flex justify-center items-center gap-1 shadow-cla-blue hover:underline"><span>Learn more </span> <span classNameName='mt-1'><BsArrowRightShort size={20} /></span></button>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="p-4 md:w-1/3">
                            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://mironmahmud.com/greeny/assets/ltr/images/blog/03.jpg" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">ADMIN</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3 hover:text-[#119744]">sriracha leggings jianbing microdosing tousled waistcoat-1</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <button className="text-[#119744] font-medium text-xl hover:scale-105 drop-shadow-md flex justify-center items-center gap-1 shadow-cla-blue hover:underline"><span>Learn more </span> <span classNameName='mt-1'><BsArrowRightShort size={20} /></span></button>

                                    </div>
                                </div>
                            </div>
                        </div>








                    </div>
                </div>
            </section>


            <div className='flex justify-center items-center'>
                <button className='px-6 py-3 text-[#119744]  flex justify-center items-center gap-1 border-2 border-[#119744] rounded-md font-bold hover:bg-[#119744] hover:text-white duration-200'><span>  <AiFillEye size={20} /></span> <span>View All Blogse</span></button>
            </div>
        </div>
    );
};

export default Articles;