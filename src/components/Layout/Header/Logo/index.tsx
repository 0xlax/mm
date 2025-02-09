import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.jpg"  // Path to your logo image
        alt="MuggedMoments Logo"
        width={120}  // Reduced from 150
        height={40}  // Reduced from 50
        className="transition-all duration-300"
      />
    </Link>
  );
};

export default Logo;
