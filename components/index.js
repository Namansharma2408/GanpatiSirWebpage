import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./common/navbar"));

const Footer = dynamic(() => import("./common/footer"));
const LoadingBackground = dynamic(() => import("./common/LoadingBackground"))
const TestTubeLoader = dynamic(() => import("./common/TestTubeAnimation"))
export { Navbar, Footer,LoadingBackground,TestTubeLoader };