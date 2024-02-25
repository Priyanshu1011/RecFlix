import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="inline-block h-[50px] border-2 border-rose-500 hover:scale-105 duration-500">
      <Link href={"/"}>
        <Image src="/assets/images/logo.png" width={160} height={50} priority />
      </Link>
    </div>
  );
};

export default Logo;
