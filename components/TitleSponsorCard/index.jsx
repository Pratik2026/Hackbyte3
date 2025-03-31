import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

const TitleSponsorCard = ({ title, description, imageSrc, link }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full xl:max-w-[95%] monitor:max-w-[90%] flex justify-center md:px-8 lg:px-0"
      >
        <div className="flex flex-col h-full shadow-lg rounded-[20px] overflow-hidden">
          
            <Image
              className="w-full rounded-t-[20px] object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
              src={imageSrc}
              alt={title}
            />
          
          <div className="flex flex-col justify-center items-start bg-[#4E2529] px-4 xl:px-8 py-8 md:p-[40px] gap-2 flex-1">
            <p className="text-[#FF939E] font-bold text-[1.25rem] md:text-[1.5rem]">
              Title Sponsor
            </p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-gotham font-bold text-white text-[2rem] xl:text-[4rem]">
                {title}
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-supporting-mediumGray font-medium text-[1rem] md:text-[1.125rem]"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default TitleSponsorCard;
