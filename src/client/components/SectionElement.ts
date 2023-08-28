import BodyElement from './BodyElement';
import DragAndDropElement from './DragAndDropElement';
import TestClass from './TestClass';

interface SectionAttributes {
  'background-color'?: string;
  'background-position'?: string;
  'background-position-x'?: string;
  'background-position-y'?: string;
  'background-repeat'?: string;
  'background-size'?: string;
  'background-url'?: string;
  border?: string;
  'border-bottom'?: string;
  'border-left'?: string;
  'border-radius'?: number;
  'border-right'?: string;
  'border-top'?: string;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  'text-align'?: string;
  'full-width'?: number;
}

class SectionElement extends TestClass {
  constructor(
    id: number,
    parent: TestClass,
    attributes: SectionAttributes = {},
  ) {
    super('section', id, attributes, parent);

    // if (!(this.parent instanceof BodyElement)) {
    //   throw new Error('Section must have a parent of type Body');
    // }
  }
}

export default SectionElement;
