import Row from "./Row";

export default function Tree({ treeData, parentId = 0, level = 0, addItem }) {
  const items = treeData.filter((item) => item.parentId === parentId);

  return (
    <>
      {items.map((item) => (
        <Row key={item.id} item={item} level={level} addItem={addItem}>
          <Tree
            treeData={treeData}
            parentId={item.id}
            level={level + 1}
            addItem={addItem}
          />
        </Row>
      ))}
    </>
  );
}
