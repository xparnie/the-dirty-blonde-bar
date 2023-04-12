import type { SectionTitleProps } from "@/interfaces";

const SectionTitle: React.FC<SectionTitleProps> = ({
   children,
   title,
   flip,
}): JSX.Element => (
   <div className="mb-6">
      <h1
         className={`font-bold text-4xl lg:text-5xl ${
            flip != null ? "text-[#000A1F]" : "text-white"
         }`}
      >
         {title}
      </h1>
      {children}
   </div>
);

export default SectionTitle;
