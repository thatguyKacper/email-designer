import DragAndDropElement from './DragAndDropElement';
import TestClass from './TestClass';

interface BodyAttributes {
  owa?: string;
  lang?: string;
  dir?: string;
}

class BodyElement extends TestClass {
  constructor(id: number, attributes: BodyAttributes = {}) {
    super('body', id, attributes);
  }
}

export default BodyElement;
