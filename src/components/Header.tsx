import { getConnectedEdges } from "reactflow";

import Button from "@/components/Button";
import useNodeContext from "@/hooks/useNodeContext";

const Header = () => {
  const { nodes, edges } = useNodeContext();
  const isFlowValid =
    nodes.length > 1 &&
    getConnectedEdges(nodes, edges).length === nodes.length - 1;

  const handleSave = () => {
    if (!isFlowValid) {
      alert("Invalid flow");
    }
  };

  return (
    <nav className="flex justify-end bg-gray-100 px-24 py-2">
      <Button onClick={handleSave}>Save Changes</Button>
    </nav>
  );
};

export default Header;
