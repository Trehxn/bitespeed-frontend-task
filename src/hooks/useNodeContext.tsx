import { useContext, createContext, Dispatch, SetStateAction } from "react";
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
  return (
    <Provider
      value={{ nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange }}
    >
      {children}
    </Provider>
  );
};

const useNodeContext = () => useContext(Context);

export default useNodeContext;
