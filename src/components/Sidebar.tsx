import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdArrowBack } from "react-icons/md";

const Sidebar: React.FC<{ selectedNode: boolean }> = ({
  selectedNode = false,
  ...rest
}) => {
  return (
    <div
      className="flex basis-1/3 flex-col border-l-2 border-gray-100"
      {...rest}
    >
      {selectedNode ? (
        <>
          <div className="relative flex items-center justify-center border-b-2 border-gray-100 px-4 py-2 font-semibold text-gray-600">
            <MdArrowBack
              size={16}
              className="absolute left-6 text-gray-600 hover:text-black"
              cursor="pointer"
            />
            Message
          </div>
          <div className="flex flex-col gap-2 border-b-2 border-gray-100 px-3 py-5 text-gray-400">
            Text
            <textarea
              className="rounded-md border-2 border-gray-100 p-2 text-gray-700"
              placeholder="test message"
            />
          </div>
        </>
      ) : (
        <div className="p-3">
          <span
            className="flex max-w-max flex-col items-center justify-center gap-1 rounded border-2 border-blue-900/60 px-12 py-2 font-semibold text-blue-900/70"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("message", "test message");
            }}
          >
            <BiMessageRoundedDetail size={30} />
            Message
          </span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
