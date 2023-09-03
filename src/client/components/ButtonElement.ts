import ElementClass from './Element';

interface ButtonAttributes {
  align?: string;
  'background-color'?: string;
  border?: string;
  'border-bottom'?: string;
  'border-left'?: string;
  'border-radius'?: number;
  'border-right'?: string;
  'border-top'?: string;
  color?: string;
  'font-size'?: number;
  'font-style'?: string;
  'font-weight'?: number;
  height?: number;
  href?: string;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  'text-align'?: string;
  'text-decoration'?: string;
  'text-transform'?: string;
  title?: string;
  'vertical-align'?: string;
  width?: number;
}

class ButtonElement extends ElementClass {
  constructor(
    id: number,
    parent: ElementClass,
    content: string,
    attributes: ButtonAttributes = {},
  ) {
    super('button', id, attributes, parent, content);

    // if (!(this.parent instanceof ColumnElement)) {
    //   throw new Error('Button must have a parent of type Column');
    // }
  }
}

export default ButtonElement;
