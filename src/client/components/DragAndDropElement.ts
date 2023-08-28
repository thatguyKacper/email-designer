class DragAndDropElement {
  element: HTMLElement;

  currentParent: HTMLElement | null = null;

  dragElement = '';

  children: DragAndDropElement[] = [];

  constructor(
    className: string,
    id: number,
    attributes: object = {},
    content?: string,
  ) {
    this.element = document.createElement('div');
    this.element.classList.add(className);
    this.element.setAttribute('draggable', 'true');
    this.element.setAttribute('id', `${className}-${id}`);
    this.element.addEventListener('dragstart', this.dragStart.bind(this));
    this.element.addEventListener('dragenter', this.dragEnter.bind(this));
    this.element.addEventListener('dragover', this.dragOver.bind(this));
    this.element.addEventListener('dragleave', this.dragLeave.bind(this));
    this.element.addEventListener('drop', this.dragDrop.bind(this));
  }

  dragStart(e: DragEvent) {
    this.dragElement = (e.target as HTMLElement).id;
  }

  dragEnter(e: DragEvent) {
    e.preventDefault();
    this.currentParent =
      e.target instanceof HTMLElement && e.target.classList.contains('section')
        ? e.target
        : (e.target as HTMLElement).closest('.section');
  }

  move() {
    const element = document.getElementById(this.dragElement);

    if (element && this.currentParent) {
      this.currentParent.appendChild(element);
    }

    return element;
  }

  dragOver(e: DragEvent) {
    this.move();
  }

  dragLeave(e: DragEvent) {
    this.move();
  }

  dragDrop(e: DragEvent) {
    e.preventDefault();

    if (this.currentParent) {
      this.move();
    }
  }

  addChild(child: DragAndDropElement) {
    this.children.push(child);
    this.element.appendChild(child.element);
  }
}

export default DragAndDropElement;
