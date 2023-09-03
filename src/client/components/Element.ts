class ElementClass {
  type: string;

  id: number;

  attributes?: object = {};

  content?: string;

  parent?: ElementClass;

  children?: ElementClass[] = [];

  constructor(
    type: string,
    id: number,
    attributes: object = {},
    parent?: ElementClass,
    content?: string,
    children: ElementClass[] = [],
  ) {
    this.type = type;
    this.id = id;
    this.content = content;
    this.parent = parent;
    this.children = children;
    this.attributes = attributes;
  }

  static addedElements: ElementClass[] = [];

  public createElement(attributes?: string) {
    const element = document.createElement('div');
    element.classList.add(this.type);
    element.setAttribute('draggable', 'true');
    element.setAttribute('id', `${this.type}-${this.id}`);
    if (attributes) {
      element.setAttribute('style', attributes)
    }

    return element;
  }
}

export default ElementClass;
