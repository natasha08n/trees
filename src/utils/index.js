export function addChildrenFlag(flatTree) {
  return flatTree.map((item) => ({
    ...item,
    hasChildren: flatTree.filter((i) => i.parentId === item.id).length > 0,
  }));
}
