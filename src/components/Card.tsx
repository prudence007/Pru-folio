'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Card = {
    
    picture:string
    title:string
    description:string
    link:string
    buttonclick:any

}

const CardItem =(props:Card)=> {

    const [ color, setColor ] = useState(false)

    const toggle =()=> {
        setColor(prevState => !prevState)
    }

    const colorChange = color? "bg-textback":"bg-cardgrey"

    return(
        <>
            <div onClick={props?.buttonclick}
                onMouseEnter={toggle}
                onMouseLeave={toggle}
                className="block max-w-[408px] h-[402px] ">
                <Link href={`${props?.link}`}>
                    <img src={`${props?.picture}`}
                        className="w-full"
                        alt={""}                
                    />
                    <div className={`w-full flex flex-col items-start ${colorChange} p-[18px] gap-3`}>
                        <div className="inline-flex font-poppins font-semibold text-xl text-[#F2F2F2]">
                            {props?.title}
                        </div>
                        <div className="inline-flex font-poppins font-normal text-sm text-[#ABABAB]">
                            {props?.description}
                        </div>
                        <div className="flex gap-2.5">
                            <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
                                <div className="font-poppins font-normal text-skyblue text-xs">Logo</div>
                            </div>
                            <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
                                <div className="font-poppins font-normal text-skyblue text-xs">UIUX Design</div>
                            </div>
                            
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardItem;