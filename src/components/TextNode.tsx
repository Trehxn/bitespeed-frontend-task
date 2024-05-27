import Image from "next/image";
import { Position, NodeProps } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";

import NodeHandle from "@/components/NodeHandle";
import whatsappImage from "../../public/whatsapp-logo.png";

const TextNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div
      className={`custom-shadow w-80 overflow-hidden rounded-lg border-2 bg-white ${selected ? "border-blue-500" : ""}`}
    >
      <NodeHandle type="target" position={Position.Left} />
      <div className="flex items-center justify-center bg-teal-200 px-4 py-1">
        <BiMessageRoundedDetail size={15} color="#63928A" />
        <span className="ml-1 flex-1 font-bold">Send Message</span>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
          <Image
            src={whatsappImage}
            alt="whatsapp logo"
            width={10}
            height={10}
          />
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
