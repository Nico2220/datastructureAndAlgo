export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];
    const visited: { [key: string]: boolean } = {};
    visited[this.name] = true;
    while (queue.length > 0) {
      const value = queue.shift()!;
      array.push(value?.name);

      for (const child of value?.children) {
        if (visited[child.name] == null) {
          visited[child.name] = true;
          queue.push(child);
        }
      }
    }
    return array;
  }
}

const graph = new Node("A");
graph.addChild("B").addChild("C").addChild("D");
graph.children[0].addChild("E").addChild("F");
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J");
graph.children[2].children[0].addChild("K");

console.log("r1", graph.breadthFirstSearch([]));
