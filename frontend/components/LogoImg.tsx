import Logo from "@/public/assets/logo_text_white.png";
import Image from "next/image";

const LogoImg: React.FC = (): JSX.Element => (
   <Image src={Logo} alt="Dirty Blonde Bar Logo" quality={55} />
);

export default LogoImg;
