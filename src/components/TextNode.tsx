import { Handle, Position } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const TextNode = () => {
  return (
    <div className="min-w-80 overflow-hidden rounded-lg shadow-2xl">
      <Handle type="source" position={Position.Left} />
      <div className="flex items-center justify-center bg-teal-200 px-4 py-1">
        <BiMessageRoundedDetail size={15} />
        <span className="ml-1 flex-1 font-bold">Send Message</span>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
          <FaWhatsapp size={12} color="#25D366" />
        </div>
      </div>
      <div className="px-4 py-3 font-semibold text-gray-700">
        test message 1
      </div>
      <Handle type="target" position={Position.Right} />
    </div>
  );
};

export default TextNode;
