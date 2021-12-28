class Node {
  constructor (name) {
    this.children = [];
    this.name = name;
  }

  add(child) {
    this.children.push(child);
  }

  remove(child) {
    const length = this.children.length;
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  }

  getChild(i) {
    return this.children[i];
  }

  hasChildren() {
    return this.children.length > 0;
  }
}

// recursively traverse a (sub)tree
function traverse(indent, node) {
  console.log(Array(indent++).join("--") + node.name);

  for (let i = 0, len = node.children.length; i < len; i++) {
    traverse(indent, node.getChild(i));
  }
}

const tree = new Node("root");
const left = new Node("left");
const right = new Node("right");
const leftLeft = new Node("leftLeft");
const leftRight = new Node("leftRight");
const rightLeft = new Node("rightLeft");
const rightRight = new Node("rightRight");

tree.add(left);
tree.add(right);
tree.remove(right); // note: remove
tree.add(right);

left.add(leftLeft);
left.add(leftRight);

right.add(rightLeft);
right.add(rightRight);

traverse(1, tree);
