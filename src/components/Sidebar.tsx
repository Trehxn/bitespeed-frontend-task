import { BiMessageRoundedDetail } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="basis-1/3 border-l-2 border-gray-100 p-3">
      <span className="flex max-w-max flex-col items-center justify-center gap-1 rounded border-2 border-blue-900/60 px-12 py-2 font-semibold text-blue-900/70">
        <BiMessageRoundedDetail size={30} />
        Message
      </span>
    </div>
  );
};

export default Sidebar;
