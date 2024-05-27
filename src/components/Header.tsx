import { useState } from "react";

import Button from "@/components/Button";
import Notification from "@/components/Notification";

import useNodeContext from "@/hooks/useNodeContext";

const NOTIFICATION_TIMER = 1500; // timer to auto hide the notification after
// component to render the header for the layout
const Header: React.FC<{}> = () => {
  const { nodes, edges } = useNodeContext();
  const [showNotification, setShowNotification] = useState(false); // state to display success or failure notifications

  // filter nodes with empty targets
  const nodesWithEmptyTargets = nodes.filter((node) => {
    // check if the node has any incoming edges
    const hasIncomingEdges = edges.some((edge) => edge.target === node.id);
    return !hasIncomingEdges;
  });
  const isFlowValid = nodes.length > 1 && nodesWithEmptyTargets.length <= 1; // check flow validity by checking if the num of nodes is greater than 1 and if more than one node has an empty target handle

  const handleSave = () => {
    // show notification for the provided timer on button click
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, NOTIFICATION_TIMER);
  };

  // render the header component
  return (
    <nav className="relative flex flex-row items-center bg-gray-100 px-24 py-2">
      <Notification
        text={!isFlowValid ? "Cannot save flow" : "Flow saved"}
        show={showNotification}
        type={isFlowValid ? "success" : "error"}
      />
      <Button onClick={handleSave} className="ml-auto">
        Save Changes
      </Button>
    </nav>
  );
};

export default Header;
