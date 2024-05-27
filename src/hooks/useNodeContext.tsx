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

// context to store data and operations related to nodes and edges
const Context = createContext<NodeContext>({
  nodes: [],
  setNodes: () => {},
  onNodesChange: () => {},
  edges: [],
  setEdges: () => {},
  onEdgesChange: () => {},
});
const Provider = Context.Provider;

// context provider which will provide the context value to any children rendered inside the wrapper
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

// hook that allows to obtain values of the node context
const useNodeContext = () => {
  const context = useContext(Context);
  if (!context) {
    console.error("useNodeContext must be used within a NodeContextProvider");
  }
  return context;
};

export default useNodeContext;
