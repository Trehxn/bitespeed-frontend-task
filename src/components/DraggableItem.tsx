type DraggableItemProps = {
  label: string;
  nodeType: "textNode" | "";
  message: string;
  icon?: React.ReactElement;
};

// reusable component that renders a draggable element
const DraggableItem: React.FC<DraggableItemProps> = ({
  icon,
  nodeType,
  message,
  label,
}) => (
  <div
    className="flex min-w-44 max-w-max flex-col items-center justify-center gap-1 rounded border-2 border-blue-900/60 px-12 py-2 font-semibold text-blue-900/70 hover:cursor-grab active:cursor-grabbing"
    draggable
    onDragStart={(e) => {
      e.dataTransfer.setData("nodeType", nodeType); // set the node type
      e.dataTransfer.setData("message", message); // set the message to display
    }}
  >
    {icon}
    {label}
  </div>
);

export default DraggableItem;
