import TestClass from './TestClass';

interface ImageAttributes {
  align?: string;
  alt?: string;
  border?: string;
  'border-bottom'?: string;
  'border-left'?: string;
  'border-radius'?: number;
  'border-right'?: string;
  'border-top'?: string;
  'fluid-on-mobile'?: boolean;
  height?: number;
  href?: string;
  name?: string;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  src?: string;
  title?: string;
  width?: number;
}

class ImageElement extends TestClass {
  constructor(id: number, parent: TestClass, attributes: ImageAttributes = {}) {
    super('image', id, attributes, parent);

    // if (!(this.parent instanceof SectionElement)) {
    //   throw new Error('Image must have a parent of type Column');
    // }
  }
}

export default ImageElement;
