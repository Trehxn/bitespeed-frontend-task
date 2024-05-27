import { useCallback } from "react";
import ReactFlow, { addEdge, Edge, Connection, MarkerType } from "reactflow";
import "reactflow/dist/style.css";

import TextNode from "@/components/TextNode";
import useNodeContext from "@/hooks/useNodeContext";

const HEADER_HEIGHT = 60;
const nodeTypes = { textNode: TextNode }; // declare the usage of custom nodes

// reusable component that renders the canvas for react flow
const Flow: React.FC<{}> = () => {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useNodeContext();

  // logic for connecting two nodes with an edge
  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: { type: MarkerType.ArrowClosed },
          },
          eds,
        ),
      ),
    [setEdges],
  );

  // logic to add a new node when dropped from the nodes panel
  const onDrop = (e: React.DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY - HEADER_HEIGHT;
    const nodeType = e.dataTransfer.getData("nodeType"); // retrieve the node type
    const label = e.dataTransfer.getData("message"); // retrieve the message to display
    setNodes((prev) => [
      ...prev,
      {
        id: (prev[prev.length - 1]?.id || "") + "1",
        data: { label: `${label} ${prev.length + 1}` },
        position: { x, y },
        type: nodeType,
      },
    ]);
  };

  return (
    <div
      className="h-full w-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

export default Flow;
