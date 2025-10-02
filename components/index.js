import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./common/navbar"));

const Footer = dynamic(() => import("./common/footer"));

export { Navbar, Footer };