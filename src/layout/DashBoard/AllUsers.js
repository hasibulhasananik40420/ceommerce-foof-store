import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../component/Loading/Loading';

const AllUsers = () => {

    const { data: allusers, isLoading, refetch } = useQuery('allusers', () => fetch('http://localhost:5000/allusers').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }


    //make admin

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/makeadmin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })

                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Successfully made an admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    //delete user

    const handleDeleteUser = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )

                            refetch()

                        }
                    })

            }
        })


    }



    return (
        <div className='bg-[#f5f6f7] flex justify-center'>

            <div className="relative overflow-x-auto bg-white w-full p-8 rounded">
                <table className="w-full text-sm text-left text-white  rounded-md">
                    <thead className="text-xs text-white uppercase bg-[#119744]">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                index
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-5">
                                User Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allusers.map((user, index) => <tr key={user._id} index={index} className="text-black border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>


                                <td className="px-6 py-4">
                                    {user?.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user.role !== 'admin' && <button onClick={() => makeAdmin(user?.email)} className='px-4 py-2 bg-[#119744] text-white font-medium rounded'>Make Admin</button>}

                                    <button className='px-4 py-2 bg-red-500 text-white font-medium rounded ml-4'>Remove Admin</button>


                                </td>
                                <td className="px-6 py-4">
                                    {user?._id}
                                </td>


                                <td className="px-6 py-4">
                                    <div className='flex gap-3 mt-4 cursor-pointer'>

                                        <span onClick={() => handleDeleteUser(user?._id)} className='h-10 w-10 rounded-md bg-red-500 text-white border flex justify-center items-center'> <AiOutlineDelete size={20} /></span>
                                    </div>
                                </td>
                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;