import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdArrowBack } from "react-icons/md";

import useNodeContext from "@/hooks/useNodeContext";
import DraggableItem from "@/components/DraggableItem";

// reusable component that renders te sidebar panel
const Sidebar: React.FC<{}> = () => {
  const { nodes, setNodes } = useNodeContext();
  const selectedNode = nodes.find((node) => node.selected); // find the selected node (if any)

  const handleDeselect = () => {
    // logic to deselect any selected node
    setNodes((prev) => prev.map((node) => ({ ...node, selected: false })));
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // logic for updating the label for a selected node
    if (!selectedNode) return;
    const newValue = e.target.value; // value from the textarea element
    setNodes((prev) =>
      prev.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { label: newValue } }
          : node,
      ),
    );
  };

  const renderPanel = () => {
    if (!selectedNode) {
      // if no node is selected render the nodes panel
      return (
        <div className="flex flex-col gap-2 p-3">
          <DraggableItem
            label="Message"
            nodeType="textNode"
            message="test message"
            icon={<BiMessageRoundedDetail size={30} />}
          />
          <DraggableItem
            label="Default"
            nodeType=""
            message="default message"
          />
        </div>
      );
    }

    // if a node is selected render the settings panel
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
