import { Skeleton } from "@/components/ui/skeleton";

const DetailCard = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-3 text-center lg:text-left">
      <span className="subheading-2">{title}</span>
      {content ? (
        <span id="newItem" className="subheading-1">
          {content}
        </span>
      ) : (
        <Skeleton className="w-full h-8" />
      )}
    </div>
  );
};

export default DetailCard;
