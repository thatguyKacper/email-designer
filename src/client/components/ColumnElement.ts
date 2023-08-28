import DragAndDropElement from './DragAndDropElement';
import SectionElement from './SectionElement';
import TestClass from './TestClass';

interface ColumnAttributes {
  'background-color'?: string;
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
  'vertical-align'?: string;
  width?: number;
}

class ColumnElement extends TestClass {
  constructor(
    id: number,
    parent: TestClass,
    attributes: ColumnAttributes = {},
  ) {
    super('column', id, attributes, parent);

    // if (!(this.parent instanceof SectionElement)) {
    //   throw new Error('Column must have a parent of type Section');
    // }
  }
}

export default ColumnElement;
