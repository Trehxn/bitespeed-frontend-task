import { useCallback } from "react";
import ReactFlow, { addEdge, Edge, Connection, MarkerType } from "reactflow";
import "reactflow/dist/style.css";

import TextNode from "@/components/TextNode";
import useNodeContext from "@/hooks/useNodeContext";

const HEADER_HEIGHT = 60;
const nodeTypes = { textNode: TextNode };

const Flow: React.FC<{}> = () => {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useNodeContext();

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: { type: MarkerType.ArrowClosed },
            style: {
              color: "red",
              fill: "red",
            },
          },
          eds,
        ),
      ),
    [setEdges],
  );

  const onDrop = (e: React.DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY - HEADER_HEIGHT;
    const nodeType = e.dataTransfer.getData("nodeType");
    const label = e.dataTransfer.getData("message");
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
