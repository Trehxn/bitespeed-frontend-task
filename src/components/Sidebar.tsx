import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdArrowBack } from "react-icons/md";

import useNodeContext from "@/hooks/useNodeContext";

const Sidebar: React.FC<{}> = () => {
  const { nodes, setNodes } = useNodeContext();
  const selectedNode = nodes.find((node) => node.selected);

  const handleDeselect = () => {
    setNodes((prev) => prev.map((node) => ({ ...node, selected: false })));
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!selectedNode) return;
    setNodes((prev) =>
      prev.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { label: e.target.value } }
          : node,
      ),
    );
  };

  const renderPanel = () => {
    if (!selectedNode) {
      return (
        <div className="p-3">
          <span
            className="flex max-w-max flex-col items-center justify-center gap-1 rounded border-2 border-blue-900/60 px-12 py-2 font-semibold text-blue-900/70 hover:cursor-grab active:cursor-grabbing"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("message", "test message");
            }}
          >
            <BiMessageRoundedDetail size={30} />
            Message
          </span>
        </div>
      );
    }

    return (
      <>
        <div className="relative flex items-center justify-center border-b-2 border-gray-100 px-4 py-2 font-semibold text-gray-600">
          <MdArrowBack
            size={16}
            className="absolute left-6 text-gray-600 hover:text-black"
            cursor="pointer"
            onClick={handleDeselect}
          />
          Message
        </div>
        <div className="flex flex-col gap-2 border-b-2 border-gray-100 px-3 py-5 text-gray-400">
          Text
          <textarea
            className="rounded-md border-2 border-gray-100 p-2 text-gray-700"
            placeholder="test message"
            value={selectedNode.data?.label || ""}
            onChange={handleUpdate}
          />
        </div>
      </>
    );
  };

  return (
    <div className="flex basis-1/3 flex-col border-l-2 border-gray-100">
      {renderPanel()}
    </div>
  );
};

export default Sidebar;
