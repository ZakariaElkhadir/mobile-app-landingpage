import Image from "next/image";

interface ReviewCardProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
}

const StarIcon = ({ filled = true, half = false }) => {
  return (
    <div className="relative w-5 h-5">
      {/* Background star (gray) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#E5E7EB"
        className="w-full h-full absolute"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>

      {/* Foreground star (blue or clipped blue) */}
      {(filled || half) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#208AFF"
          className="w-full h-full absolute"
          style={half ? { clipPath: "inset(0 50% 0 0)" } : undefined}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default function ReviewCard({
  quote,
  name,
  role,
  avatarSrc,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-1 mb-6">
        <StarIcon filled />
        <StarIcon filled />
        <StarIcon filled />
        <StarIcon filled />
        <StarIcon filled={false} half={true} />
      </div>

      <p className="text-[#767676] text-lg leading-relaxed mb-8 grow">
        "{quote}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-12 h-12  overflow-hidden shrink-0">
          <Image src={avatarSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-900 text-sm">{name}</span>
          <span className="text-[#949494] text-sm">{role}</span>
        </div>
      </div>
    </div>
  );
}
