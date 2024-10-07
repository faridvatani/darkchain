export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-8 h-8 bg-fuchsia-500 animate-ping rounded-full"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-fuchsia-500 animate-ping delay-200 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-fuchsia-500 animate-ping delay-400 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-fuchsia-500 animate-ping delay-600 rounded-full"></div>
      </div>
    </div>
  );
}
