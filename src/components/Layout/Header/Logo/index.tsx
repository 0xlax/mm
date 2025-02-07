import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.jpg"  // Path to your logo image
        alt="MuggedMoments Logo"
        width={150}  // Adjust the width as needed
        height={50}  // Adjust the height as needed
        className="transition-all duration-300"
      />
    </Link>
  );
};

export default Logo;
