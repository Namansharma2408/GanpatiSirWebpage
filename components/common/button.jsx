'use client'
import React from 'react'
import { useRouter } from "next/navigation";
const Button = ({ className, children, route, onClick,activeclassname,inactiveclassname }) => {

    const router = useRouter();

    const handleClick = (e) => {
        if (route) {
            router.push(route);
        }
        console.log(router)
        // Run any custom onClick passed from parent
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button