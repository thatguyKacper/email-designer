import MJMLNode from './main.component';

interface MJMLBodyAttributes {
  'background-color'?: string;
  width?: string;
}

export default class MJMLBody extends MJMLNode {
  constructor(attributes: MJMLBodyAttributes = {}, children: MJMLNode[] = []) {
    super('mj-body', attributes, children);
  }
}

export const addBody = (
  parent: MJMLNode,
  attributes: MJMLBodyAttributes = {},
) => {
  const body = new MJMLBody(attributes);
  // body.addChild(section);
  parent.addChild(body);
  return body;
};
