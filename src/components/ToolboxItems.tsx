import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";
import { Fragment } from "react";

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        className,
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      )}
    >
      <div
        className={twMerge(
          itemsWrapperClassName,
          "flex flex-none py-0.5 gap-6 pr-6"
        )}
      >
        {[...Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex gap-4 items-center py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;