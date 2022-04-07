import Text from "../common/Text";

function Item({ id, name, children, depth, addSibling }) {
  const addNode = () => {
    addSibling(id);
  };

  return (
    <div style={{ marginLeft: depth }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Text>- {name}</Text>
        <button onClick={addNode}>+</button>
      </div>
      {children}
    </div>
  );
}

export default Item;
