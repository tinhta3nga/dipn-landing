type ServiceCardProps = {
  image: string;
  bgSize: string;
  bgPosition: string;
  title: string;
  desc: string;
};

export function ServiceCard({
  image,
  bgSize,
  bgPosition,
  title,
  desc,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center h-[500px] p-6 gap-8">
      {/* IMAGE */}
      <div
        className="w-[224px] h-[224px] shrink-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
        }}
      />

      {/* TITLE – FIX HEIGHT */}
      <h3 className="text-white text-lg font-semibold h-[56px] flex items-center justify-center">
        {title}
      </h3>

      {/* DESC – FIX HEIGHT */}
      <p className="text-gray-400 text-sm leading-relaxed h-[72px]">
        {desc}
      </p>

      {/* BUTTON – ALWAYS SAME LINE */}
      <button className="mt-auto px-6 py-2 rounded-full bg-blue-600 text-white text-sm">
        Xem thêm
      </button>
    </div>
  );
}
