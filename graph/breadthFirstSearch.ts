// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
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
    console.log(queue);
    while (queue.length > 0) {
      const current = queue.pop() as Node;
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }

  bfs(array: string[]) {
    const queue: Node[] = [this];
    let visited: { [key: string]: boolean } = {};
    visited[this.name] = true;

    while (queue.length > 0) {
      const current = queue.pop() as Node;
      array.push(current.name);
      for (const child of current.children) {
        if (!visited[child.name]) {
          queue.push(child);
          visited[child.name] = true;
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
console.log(graph.bfs([]));
