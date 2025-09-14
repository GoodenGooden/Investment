
export default function CreateCard({ title, icon, details }) {
  return (
    <div
      className="
        p-4 sm:p-6 lg:p-8 
        bg-white 
        w-full max-w-sm sm:max-w-md 
        flex flex-col gap-4 sm:gap-6 
        rounded-2xl shadow
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg sm:text-xl lg:text-2xl">{title}</p>
        <span className="text-2xl sm:text-3xl">{icon}</span>
      </div>

      {/* Details */}
      {details.map((item, index) => (
        <div
          key={index}
          className="flex justify-between text-sm sm:text-base lg:text-lg"
        >
          <p className="text-[#6E80A3]">{item.label}</p>
          <p className="font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
