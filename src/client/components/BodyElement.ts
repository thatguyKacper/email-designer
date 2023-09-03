import DragAndDropElement from './DragAndDropElement';
import ElementClass from './Element';

interface BodyAttributes {
  owa?: string;
  lang?: string;
  dir?: string;
}

class BodyElement extends ElementClass {
  constructor(id: number, attributes: BodyAttributes = {}) {
    super('body', id, attributes);
  }
}

export default BodyElement;
