import MJMLNode from './main.component';

interface MJMLRootAttributes {
  owa?: string;
  lang?: string;
  dir?: string;
}

export default class MJMLRoot extends MJMLNode {
  constructor(attributes: MJMLRootAttributes = {}, children: MJMLNode[] = []) {
    super('mjml', attributes, children);
  }
}

export const addHTML = (
  parent: MJMLNode,
  attributes: MJMLRootAttributes = {},
) => {
  const main = new MJMLRoot(attributes);
  parent.addChild(main);
  return main;
};
