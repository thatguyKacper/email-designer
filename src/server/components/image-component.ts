import MJMLNode from './main.component';

interface MJMLImageAttributes {
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

export default class MJMLImage extends MJMLNode {
  constructor(attributes: MJMLImageAttributes = {}) {
    super('mj-image', attributes);
  }
}

export const addImage = (
  parent: MJMLNode,
  attributes: MJMLImageAttributes = {},
) => {
  const image = new MJMLImage(attributes);
  parent.addChild(image);
  return image;
};
