type Props = {
  className?: string;
};

export default function AnnouncementBar({ className = "" }: Props) {
  return (
    <div className={`bg-amber-100 text-amber-900 ${className}`}>
      <div className="max-w-7xl sm:mx-6 md:mx-8 lg:mx-10 xl:mx-auto py-3 px-4">
        <p className="text-center">
          <span className="font-semibold">Notice:</span> This project’s database has been archived. Interactive features, such as form submissions, may no longer function properly.
        </p>
      </div>
    </div>
  );
}