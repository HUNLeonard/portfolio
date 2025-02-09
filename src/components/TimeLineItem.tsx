const TimelineItem = ({
  side,
  title,
  organization,
  date,
  points,
}: {
  side: "left" | "right";
  title: string;
  organization: string;
  date: string;
  points: string[];
}) => {
  return (
    <div
      className={`${side === "left" ? "LeftCard" : "RightCard"} 
        relative w-full max-xs-px-2 max-lg:px-6 max-lg:ml-6 lg:w-1/2 ${side === "right" ? "lg:ml-auto" : ""} 
        mb-8 transition:[scale] duration-500 hover:scale-105`}>
      <div className={`relative bg-gray-700 p-6 rounded-lg border border-gray-800  
      ${side === "left" ? "lg:mr-10" : "lg:ml-10"}`}>
        <h3 className="text-xl font-bold text-blue-400 mb-1">{title}</h3>
        <h4 className="text-lg text-gray-300 mb-2">{organization}</h4>
        <p className="text-sm text-gray-400 mb-4">{date}</p>
        <ul className="space-y-2 list-disc ml-4">
          {points.map((point, index) => (
            <li key={index} className="text-gray-400 text-sm leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
