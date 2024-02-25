import Image from "next/image";

const FeatureCard = ({ title, content }) => {
  return (
    <div className="card_bg card_shadow flex flex-col justify-center items-start gap-y-10 w-[280px] h-[280px] px-10 py-6 rounded-md">
      {/* Title */}
      <h2 className="w-full text-3xl font-semibold primary_color text-center lg:text-left">
        {title}
      </h2>

      {/* Content */}
      <p className="secondary_color text-center lg:text-left">{content}</p>
    </div>
  );
};

export default FeatureCard;
