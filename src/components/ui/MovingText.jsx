"use client";

export function MovingText() {
  return (
    <div className="inline-block overflow-hidden w-full flex items-center">
      <div className="p-2 bg-gray-100 w-2/12 border-r-2 border-black z-10">
        <p> work</p>
      </div>
      <p className="px-4 bg-gray-100 text-9xl font-extrabold inline-block whitespace-nowrap animate-slide">
        SOUTANOSAITO
      </p>
    </div>
  );
}
export default MovingText;
