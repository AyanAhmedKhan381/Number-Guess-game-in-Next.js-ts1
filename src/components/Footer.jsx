import Image from "next/image";
import Link from "next/link";

<div className="flex">
          <Image src={"/linkdin logo.svg"} width={50} height={50} alt={"image"} />
        </div>
const Footer = () => {
    return (
       <div className="flex ">
      <div className="md:fixed bottom-2 text-yellow-400 max-w-[200px] mx-auto right-8 border py-1 px-3 rounded-md shadow border-zinc-600 cursor-default mb-4 md:mb-1 bg-neutral-800/30 backdrop-blur">
        Made with ❤️ by {"Code-with-Ayan"}
        <a
          href=""
          target="__blank"
          className="text-rose-500"
        >
         
        </a>
        
      </div>
      <Link href={"https://www.linkedin.com/in/ayan-ahmed-khan-3143ba274/"} className="items-center mx-auto">
      <div className="flex items-center mx-auto">
          <Image src={"/linkdin logo.svg"} width={50} height={50} alt={"image"} className="mx-auto" />
        </div>
        </Link>
      </div>
      
    );
  };
  
  export default Footer;
  