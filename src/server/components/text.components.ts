import MJMLNode from './main.component';

interface MJMLTextAttributes {
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

export default class MJMLText extends MJMLNode {
  content: string;

  constructor(content: string, attributes: MJMLTextAttributes = {}) {
    super('mj-text', attributes);
    this.content = content;
  }
}

export const addText = (
  parent: MJMLNode,
  content: string,
  attributes: MJMLTextAttributes = {},
) => {
  const text = new MJMLText(content, attributes);
  parent.addChild(text);
  return text;
};
