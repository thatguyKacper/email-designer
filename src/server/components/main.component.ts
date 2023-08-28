import { MJMLJsonObject } from 'mjml-core';

export default abstract class MJMLNode {
  constructor(
    public tagName: string,
    public attributes: object = {},
    public children: MJMLJsonObject[] = [],
  ) {}

  addChild(child: MJMLNode) {
    this.children.push(child);
  }
}
