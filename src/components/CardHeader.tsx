import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge(className, "flex flex-col p-6")}>
      <div className="inline-flex gap-2 items-center">
        <StarIcon className="text-emerald-300 size-9" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/70 mt-2">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
