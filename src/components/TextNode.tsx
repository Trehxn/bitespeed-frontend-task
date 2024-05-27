import { Position, NodeProps } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

import NodeHandle from "@/components/NodeHandle";

const TextNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="custom-shadow min-w-80 overflow-hidden rounded-lg bg-white">
      <NodeHandle type="target" position={Position.Left} />
      <div className="flex items-center justify-center bg-teal-200 px-4 py-1">
        <BiMessageRoundedDetail size={15} color="#63928A" />
        <span className="ml-1 flex-1 font-bold">Send Message</span>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
          <FaWhatsapp size={12} color="#25D366" />
        </div>
      </div>
      <div className="mb-1 px-4 py-3 font-semibold text-gray-600">
        {data.label}
      </div>
      <NodeHandle type="source" position={Position.Right} />
    </div>
  );
};

export default TextNode;
