import Image from "next/image";

const FeatureCard = ({ icon, title, body }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-10">
      <div className="w-20 h-20 flex items-center justify-center">
        <Image
          src={icon}
          alt="Free Shipping Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-black_main">{title}</h3>

      <p className="text-sm text-secondary_color">{body}</p>
    </div>
  );
};

export default FeatureCard;
