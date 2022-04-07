import { useCallback } from "react";
import randomWords from "random-words";
import Text from "../common/Text";

export default function Row({ item, level, children, addItem }) {
  const addSibling = useCallback(() => {
    addItem({ parentId: item.parentId, text: randomWords() });
  }, [addItem, item.parentId]);

  const addChild = useCallback(() => {
    addItem({ parentId: item.id, text: randomWords() });
  }, [addItem, item.id])

  return (
    <div key={item.id}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: `${level * 10}px`,
        }}
      >
        <Text>- {item.text}</Text>
        <button onClick={addSibling}>+ sibling</button>
        <button onClick={addChild}>+ child</button>
      </div>
      <div>{children}</div>
    </div>
  );
}
