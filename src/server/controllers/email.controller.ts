import { Request, Response } from 'express';
import mjml2html from 'mjml';
import htmlMinify from 'html-minifier';
import { addGroup } from '../components/group.component';
import { addWrapper } from '../components/wrapper.component';
import { addCarousel } from '../components/carousel.component';
import { addButton } from '../components/button.component';
import { addDivider } from '../components/divider.component';
import { addHero } from '../components/hero.component';
import { addImage } from '../components/image-component';
import MJMLNavbar, { addNavbar } from '../components/navbar.component';
import MJMLSocial, { addSocial } from '../components/social.component';
import { addSpacer } from '../components/spacer.component';
import { addNavbarLink } from '../components/navbar-link.component';
import { addSocialElement } from '../components/social-element.component';
import { addColumn } from '../components/column.component';
import MJMLRoot from '../components/html.component';
import MJMLSection, { addSection } from '../components/section.component';
import { addText } from '../components/text.components';
import MJMLBody, { addBody } from '../components/body.component';

const minifyEmail = (html: string) => {
  const mini = htmlMinify.minify(html, {
    caseSensitive: true,
    collapseWhitespace: true,
    // / collapseInlineTagWhitespace: true,
    conservativeCollapse: true,
    preserveLineBreaks: true,
    keepClosingSlash: true,
    // / decodeEntities: true,
    // / removeEmptyElements: true,
    minifyCSS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    trimCustomFragments: true,
  });
  return mini;
};

const getEmail = async (req: Request, res: Response) => {
  const { template } = req.cookies;

  if (!template) {
    return res.status(400).json({ message: 'No templates found' });
  }
  return res.status(200).send(template);
};

const generateEmail = async (req: Request, res: Response) => {
  try {
    const { components } = req.body;

    const mjmlRoot = new MJMLRoot();

    let currentParent = mjmlRoot;
    let currentBody: MJMLBody;
    let currentSection: MJMLSection;
    let currentNavbar: MJMLNavbar;
    let currentSocial: MJMLSocial;

    components.forEach((component) => {
      switch (component.type) {
        case 'body':
          currentBody = addBody(mjmlRoot, component.attributes);
          break;
        case 'section':
          currentSection = addSection(currentBody, component.attributes);
          break;
        case 'column':
          currentParent = addColumn(currentSection, component.attributes);
          break;
        case 'group':
          currentParent = addGroup(currentParent, component.attributes);
          break;
        case 'wrapper':
          currentParent = addWrapper(currentParent, component.attributes);
          break;
        case 'carousel':
          currentParent = addCarousel(currentParent, component.attributes);
          break;
        case 'button':
          currentParent = addButton(
            currentParent,
            component.content,
            component.attributes,
          );
          break;
        case 'divider':
          currentParent = addDivider(currentParent, component.attributes);
          break;
        case 'hero':
          currentParent = addHero(currentParent, component.attributes);
          break;
        case 'image':
          currentParent = addImage(currentParent, component.attributes);
          break;
        case 'navbar':
          currentNavbar = addNavbar(currentSection, component.attributes);
          break;
        case 'navbar-link':
          addNavbarLink(currentNavbar, component.attributes);
          break;
        case 'social':
          currentSocial = addSocial(currentSection, component.attributes);
          break;
        case 'social-element':
          addSocialElement(currentSocial, component.attributes);
          break;
        case 'spacer':
          currentParent = addSpacer(currentParent, component.attributes);
          break;
        case 'text':
          addText(currentParent, component.content, component.attributes);
          break;
        default:
      }
    });

    // const mjmlString = JSON.stringify(mjmlRoot, null, 2);

    // console.log(mjmlString);

    const { html } = mjml2html(mjmlRoot, { validationLevel: 'soft' });
    const mini = minifyEmail(html);
    res.set('Content-Type', 'text/html');
    res.cookie('template', components); // save email template in cookies
    res.send(mini);
    // res.status(201).json({ message: 'Email successfully created' });
  } catch (error) {
    res.status(400).json({ message: 'Could not generate email', error });
  }
};

export default { generateEmail, getEmail };
