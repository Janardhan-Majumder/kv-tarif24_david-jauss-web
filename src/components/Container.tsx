import { cn } from "@/lib/utils";
import { TCommonProps } from "@/types/common.type";

const Container = ({ className, children, id }: TCommonProps) => {
  return (
    <div
      id={id}
      className={cn(
        "container mx-auto px-2 sm:px-4 lg:px-6 2xl:px-2 py-6 lg:py-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
