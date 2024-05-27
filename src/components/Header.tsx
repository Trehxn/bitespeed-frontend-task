import { getConnectedEdges } from "reactflow";
import { useState } from "react";

import Button from "@/components/Button";
import useNodeContext from "@/hooks/useNodeContext";

const NOTIFICATION_TIMER = 3000;
const Header = () => {
  const { nodes, edges } = useNodeContext();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const isFlowValid =
    nodes.length > 1 &&
    getConnectedEdges(nodes, edges).length === nodes.length - 1;

  const handleSave = () => {
    if (!isFlowValid) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, NOTIFICATION_TIMER);
    } else {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, NOTIFICATION_TIMER);
    }
  };

  return (
    <nav className="relative flex flex-row items-center bg-gray-100 px-24 py-2">
      <Notification
        color="bg-red-200/80"
        text="Cannot save flow"
        show={showError}
      />
      <Notification
        color="bg-green-200/80"
        text="Flow saved"
        show={showSuccess}
      />
      <Button onClick={handleSave} className="ml-auto">
        Save Changes
      </Button>
    </nav>
  );
};

type NotificationProps = {
  text: string;
  show: boolean;
  color: string;
};

const Notification: React.FC<NotificationProps> = ({ text, show, color }) => (
  <div
    className={`absolute inset-0 m-auto h-max w-max rounded-xl px-4 py-2 font-bold ${color}`}
    style={{
      display: show ? "block" : "none",
    }}
  >
    {text}
  </div>
);

export default Header;
