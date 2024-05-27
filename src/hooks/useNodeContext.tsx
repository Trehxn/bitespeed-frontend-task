import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";
import {
  useNodesState,
  Node,
  OnNodesChange,
  useEdgesState,
  Edge,
  OnEdgesChange,
} from "reactflow";

type NodeContext = {
  nodes: Node[];
  setNodes: Dispatch<SetStateAction<Node<any, string | undefined>[]>>;
  onNodesChange: OnNodesChange;
  edges: Edge[];
  setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
  onEdgesChange: OnEdgesChange;
};

const Context = createContext<NodeContext>({
  nodes: [],
  setNodes: () => {},
  onNodesChange: () => {},
  edges: [],
  setEdges: () => {},
  onEdgesChange: () => {},
});
const Provider = Context.Provider;

export const NodeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const value = useMemo(
    () => ({
      nodes,
      setNodes,
      onNodesChange,
      edges,
      setEdges,
      onEdgesChange,
    }),
    [nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange],
  );

  return <Provider value={value}>{children}</Provider>;
};

const useNodeContext = () => {
  const context = useContext(Context);
  if (!context) {
    console.error("useNodeContext must be used within a NodeContextProvider");
  }
  return context;
};

export default useNodeContext;
