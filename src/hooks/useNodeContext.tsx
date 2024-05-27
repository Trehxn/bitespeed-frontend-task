import { useContext, createContext, Dispatch, SetStateAction } from "react";
import { useNodesState, Node, OnNodesChange } from "reactflow";

type NodeContext = {
  nodes: Node[];
  setNodes: Dispatch<SetStateAction<Node<any, string | undefined>[]>>;
  onNodesChange: OnNodesChange;
};

const Context = createContext<NodeContext>({
  nodes: [],
  setNodes: () => {},
  onNodesChange: () => {},
});
const Provider = Context.Provider;

export const NodeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  return (
    <Provider value={{ nodes, setNodes, onNodesChange }}>{children}</Provider>
  );
};

const useNodeContext = () => useContext(Context);

export default useNodeContext;
