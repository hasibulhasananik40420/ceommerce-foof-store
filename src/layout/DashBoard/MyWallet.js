import React from 'react';

const MyWallet = () => {
    return (
        <div className='bg-[#f5f6f7] p-4'>
            <div className='lg:flex lg:justify-center gap-4'>
                <div className='lg:w-2/4 w-full p-6 bg-white rounded-md shadow-xl'>
                    <h1 className='lg:text-3xl text-2xl font-bold font-serif border-b border-[#119744] pb-3 '>My Wallet</h1>
                    <p className='text-xl mt-4 text-[#555555] font-serif'>Current Balance</p>
                    <p className='text-4xl font-bold text-[#119744] mt-2'>$575.00</p>

                    <div className='flex justify-center gap-3 mt-6 mb-2'>
                        <div className='w-[220px] bg-[#f5f5f5] p-4 rounded'>
                            <h1 className='text-xl text-[#555555] font-serif mb-1'>Total Credit</h1>
                            <p className='lg:text-3xl text-2xl font-semibold text-[#39404a]'>$2347.76</p>
                        </div>
                        <div className='w-[220px] bg-[#f5f5f5] p-4 rounded'>
                            <h1 className='text-xl text-[#555555] font-serif mb-1'>Total Debit</h1>
                            <p className='lg:text-3xl text-xl font-semibold text-[#272727]'>$2347.76</p>
                        </div>
                    </div>

                </div>



                <div className='lg:w-2/4 w-full p-6 bg-white rounded-md shadow-xl lg:mt-0 mt-8'>
                    <h1 className='lg:text-3xl text-2xl font-bold font-serif border-b border-[#119744] pb-3 '>Add Wallet</h1>
                    <input type="text" id="first_name" name='firstName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full h-12 outline-none mt-5 pl-2 " placeholder="$0.000" required />


                    <div className='flex justify-center gap-3 mt-6 mb-2'>
                        <div className='w-[220px] bg-[#f5f5f5] p-4 rounded'>
                            <h1 className='text-xl text-[#555555] font-serif mb-1'>Total Credit</h1>
                            <p className='lg:text-3xl text-2xl font-semibold text-[#39404a]'>$2347.76</p>
                        </div>
                        <div className='w-[220px] bg-[#f5f5f5] p-4 rounded'>
                            <h1 className='text-xl text-[#555555] font-serif mb-1'>Total Debit</h1>
                            <p className='lg:text-3xl text-2xl font-semibold text-[#39404a]'>$2347.76</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyWallet;