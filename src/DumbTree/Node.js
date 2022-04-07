import Item from "./Item";

function Node({ id, name, children, depth, updateTree }) {
  const addSibling = (id) => {
    updateTree(id);
  };

  if (name && !children) {
    return <Item name={name} depth={`${depth * 20}px`} />;
  } else if (name && children) {
    return (
      <Item name={name} depth={`${depth * 20}px`}>
        {children.map((child) => (
          <Node
            key={child.id}
            id={child.id}
            name={child.name}
            children={child.children}
            depth={depth}
            addNode={addSibling}
          />
        ))}
      </Item>
    );
  }
  return null;
}

export default Node;
