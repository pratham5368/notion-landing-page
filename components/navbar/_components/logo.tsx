
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
         <>
            <Link href={"/"}>
                <Image
                    src="next.svg"
                    alt="logo"
                    width={120}
                    height={90}
                    className="
                    w-24 mx-3
                  "
                    />
            </Link>
    </> 
    );
}
 
export default Logo;