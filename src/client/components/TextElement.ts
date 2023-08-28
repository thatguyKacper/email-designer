import ColumnElement from './ColumnElement';
import DragAndDropElement from './DragAndDropElement';
import TestClass from './TestClass';

interface TextAttributes {
  align?: string;
  color?: string;
  'font-size'?: number;
  'font-style'?: string;
  'font-weight'?: number;
  height?: number;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  'text-decoration'?: string;
  'text-transform'?: string;
  width?: number;
}

class TextElement extends TestClass {
  constructor(
    id: number,
    parent: TestClass,
    content: string,
    attributes: TextAttributes = {},
  ) {
    super('text', id, attributes, parent, content);

    // if (!(this.parent instanceof ColumnElement)) {
    //   throw new Error('Text must have a parent of type Column');
    // }
  }
}

export default TextElement;
