import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import Node from "./DumbTree/Node";
import Text from "./common/Text";
import Tree from "./Tree";
import "./App.css";

import { tree as treeInitial, flatTree as flatTreeInitial } from "./constants/data";
import { addChildrenFlag } from "./utils";

function App() {
  const [mode, setMode] = useState("recursive");
  const [flatTree, setFlatTree] = useState(flatTreeInitial);

  const updateMode = useCallback(() => {
    setMode(mode === "recursive" ? "iteractive" : "recursive");
  }, [mode]);

  const addItem = useCallback(
    ({ parentId, text }) => {
      setFlatTree([...flatTree, { id: uuidv4(), parentId, text }]);
    },
    [flatTree]
  );

  return (
    <div>
      <p>Mode: {mode}</p>
      <button onClick={updateMode}>Change mode</button>
      <p />
      {mode === "recursive" ? (
        <>
          <Text>Option 1</Text>
          <div className="app-option-container">
            <Text key={treeInitial.id}>- {treeInitial.name}</Text>
            {treeInitial.children.map((item) => (
              <Node
                key={item.id}
                id={item.id}
                name={item.name}
                children={item.children}
                depth={1}
              />
            ))}
          </div>
          <Text>------------------------------------------------</Text>
          <Text>Option 2</Text>
          <Tree treeData={addChildrenFlag(flatTree)} addItem={addItem} />
        </>
      ) : (
        <p>Iteractive</p>
      )}
    </div>
  );
}

export default App;
