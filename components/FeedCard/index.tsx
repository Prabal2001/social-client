import Image from 'next/image';
import React from 'react';
import { AiOutlineRetweet } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { FiUpload } from 'react-icons/fi';
import { TbMessageCircle } from 'react-icons/tb';

const FeedCard: React.FC = () => {
    return (
        <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-800 transition-all cursor-pointer'>    
         <div className='grid grid-cols-1 gap-3'>
            <div className = "col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/99201484?v=4" alt='user-image' height={50} width={50} />
            </div>
            <div className ="col-span-11">
                <h5>Prabal Arora</h5>
                <p>To write about yourself effectively,highlighting key personal and professional attributes. Share anecdotes or experiences that showcase your skills and character. Be authentic and concise, focusing on qualities relevant to the context, such as work, academic, or personal achievements.
                </p>
                <div className='flex justify-between mt-4 text-xl items-center p-2 w-[90%]'>
                 <div>
                 <TbMessageCircle />
                 </div>
                 <div>
                 <CiHeart />
                 </div>
                 <div>
                 <FiUpload />
                 </div>
                 <div>
                 <AiOutlineRetweet />
                </div>
                </div>
                    
            </div>
         </div>  
         </div>
          )
}

export default FeedCard;