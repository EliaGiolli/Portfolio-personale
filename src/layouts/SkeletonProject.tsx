import { Skeleton } from "../components/SkeletonComponent";

export const ProjectsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx} className="p-4 border rounded-lg shadow-sm">
        <Skeleton className="h-40 w-full mb-4" /> {/* img */}
        <Skeleton className="h-6 w-3/4 mb-2" />   {/* titole */}
        <Skeleton className="h-4 w-full mb-2" />  {/* description */}
        <Skeleton className="h-4 w-5/6" />        {/* description */}
      </div>
    ))}
  </div>
);
