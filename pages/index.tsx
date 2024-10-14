import Image from "next/image";
import localFont from "next/font/local";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { FaXTwitter } from "react-icons/fa6";
import { FaHome,FaHashtag} from "react-icons/fa";
import React, { useCallback } from "react";
import FeedCard from "@/components/FeedCard";
import { BiMoney, BiUser } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import toast from "react-hot-toast";
import { graphQLClient } from "@/clients/app";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface TwitterSidebarButton {
  title:string;
  icon:React.ReactNode;
}

const sidebarMenuItems:TwitterSidebarButton[] =[
  {
    title:'Home',
    icon: <FaHome />
  },
  {
    title:'Explore',
    icon:<FaHashtag/>
  },
  {
    title:'Notifications',
    icon:<FaHashtag/>
  },
  {
    title:'Messages',
    icon:<FaHashtag/>
  },
  {
    title:'Bookmarks',
    icon:<FaHashtag/>
  },
  {
    title:'Profile',
    icon:<BiUser/>
  },
  {
    title:'Twitter Blue',
    icon:<BiMoney />
  },
  {
    title:'More Options',
    icon:<SlOptions />
  }

]

export default function Home() {
  const{user} = useCurrentUser();
  const handleLoginWithGoogle = useCallback(async(cred:CredentialResponse) => {
    const googleToken = cred.credential;
    if(!googleToken) {
      return toast.error(`Google token not found`);
    }
    const {verifyGoogleToken} = await graphQLClient.request(verifyUserGoogleTokenQuery,{token:googleToken})
     toast.success('Verified successfully');
     if(verifyGoogleToken) {
          window.localStorage.setItem("token",verifyGoogleToken);
     }
  },[])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3 border ml-15 pt-2 p-4">
          <div className="text-3xl h-fit w-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all mt-2">
        <FaXTwitter />
        </div>
        <div className="mt-2 text-1xl">
          <ul>
         {sidebarMenuItems.map(item => 
            <li className="flex justify-start items-center gap-2 hover:bg-gray-800 rounded-full px-5 py-2 w-fit" key={item.title}>
              <span className="text-2xl">{item.icon}</span>
              <span>{item.title}</span>
            </li>)}
         </ul>
         <div className="mt-5 px-8">
         <button className="bg-[#1d9bf0] p-4 rounded-full w-full mt-4 text-lg px-2 py-4">Tweet</button>
         </div>
        </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] overflow-scroll  border-slate-500">
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          {!user && <div className="p-5 bg-slate-700 rounded-lg"> 
            <h1 className="my-2 text-2xl">New To Twitter?</h1>
         <GoogleLogin onSuccess={handleLoginWithGoogle}/>
         </div>
          }
        </div>
      </div>
    </div>
  );
}
