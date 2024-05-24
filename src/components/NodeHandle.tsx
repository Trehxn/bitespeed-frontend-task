import { Handle, HandleProps } from "reactflow";

const NodeHandle: React.FC<HandleProps> = ({ type, position }) => {
  return (
    <Handle
      type={type}
      position={position}
      style={{
        height: "0.5rem",
        width: "0.5rem",
        border: "1px solid white",
        backgroundColor: "#505050",
      }}
    />
  );
};

export default NodeHandle;
