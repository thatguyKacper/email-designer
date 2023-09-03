import './style.css';
import SectionElement from './components/SectionElement.js';
import ColumnElement from './components/ColumnElement.js';
import TextElement from './components/TextElement.js';
import DragAndDropElement from './components/DragAndDropElement';
import ElementClass from './components/Element';
import BodyElement from './components/BodyElement';
import ButtonElement from './components/ButtonElement';
import ImageElement from './components/ImageElement';
import generateEmail from './js/generateEmail';
import editElement from './js/editElement';
import editForm from './js/editForm';

const previewBtn = document.querySelector('#preview') as HTMLButtonElement;
const codeBtn = document.querySelector('#code') as HTMLButtonElement;
const sectionBtn = document.querySelector('#add-section') as HTMLButtonElement;
const sectionEditBtn = document.querySelector('#edit-section') as HTMLButtonElement;
const columnBtn = document.querySelector('#add-column') as HTMLButtonElement;
const columnEditBtn = document.querySelector('#edit-column') as HTMLButtonElement;
const textBtn = document.querySelector('#add-text') as HTMLButtonElement;
const textEditBtn = document.querySelector('#edit-text') as HTMLButtonElement;
const buttonBtn = document.querySelector('#add-button') as HTMLButtonElement;
const imageBtn = document.querySelector('#add-image') as HTMLButtonElement;
const imageEditBtn = document.querySelector('#edit-image') as HTMLButtonElement;
const output = document.querySelector('.output') as HTMLElement;
const sectionForm = document.querySelector('#section-form') as HTMLInputElement;
const columnForm = document.querySelector('#column-form') as HTMLInputElement;
const textForm = document.querySelector('#text-form') as HTMLInputElement;

const body = new BodyElement(0).createElement();
const main = output.appendChild(body);
let currrentElement = output.appendChild(body);
let clickedElement;

// Create a global array to store added elements
const addedElements: ElementClass[] = [new BodyElement(0)];

previewBtn.addEventListener('click', () => generateEmail(addedElements, output, 'HTML'));
codeBtn.addEventListener('click', () => generateEmail(addedElements, output, 'CODE'));

sectionEditBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = editForm(sectionForm)

  editElement(addedElements, clickedElement, formData.optionsObj)
})

columnEditBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = editForm(columnForm)

  editElement(addedElements, clickedElement, formData.optionsObj)
})

textEditBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = editForm(textForm)

  editElement(addedElements, clickedElement, formData.optionsObj)
})

imageEditBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = editForm(textForm)

  editElement(addedElements, clickedElement, formData.optionsObj)
})

output.addEventListener('click', (e) => {
  clickedElement = e.target
  clickedElement.classList.toggle('active')

  function extractNumericPart(inputString) {
    const match = inputString.match(/[a-zA-Z0-9]+-(\d+)/);
    return match ? parseInt(match[1]) : null;
  }

  const parent = addedElements.findLast(
    (element) => extractNumericPart(e.target.id) === element.id,
  );

  clickedElement = parent || null
});

sectionBtn.addEventListener('click', () => {
  const formData = sectionBtn.parentElement.parentElement;

  const options = editForm(formData);
  
  const section = new SectionElement(addedElements.length, addedElements[0], options.optionsObj);
  
  addedElements.push(section);
  
  currrentElement = main.appendChild(section.createElement(options.optionsArray.join(';')));
});

columnBtn.addEventListener('click', () => {
  const formData = columnBtn.parentElement.parentElement;

  const options = editForm(formData);

  if (!(addedElements[addedElements.length - 1] instanceof SectionElement)) {
    const parent = addedElements.findLast(
      (element) => element instanceof SectionElement,
    );

    if (parent === undefined) return;

    const column = new ColumnElement(addedElements.length, parent, options.optionsObj);

    addedElements.push(column);

    currrentElement = currrentElement.parentElement.appendChild(
      column.createElement(options.optionsArray.join(';')),
    );
  } else {
    const column = new ColumnElement(
      addedElements.length,
      addedElements[addedElements.length - 1],
      options.optionsObj
    );

    addedElements.push(column);

    currrentElement = currrentElement.appendChild(column.createElement(options.optionsArray.join(';')));
  }
});

textBtn.addEventListener('click', () => {
  const formData = textBtn.parentElement.parentElement;

  const options = editForm(formData);

  if (!(addedElements[addedElements.length - 1] instanceof ColumnElement)) {
    const parent = addedElements.findLast(
      (element) => element instanceof ColumnElement,
    );
    if (parent === undefined) return;

    const text = new TextElement(addedElements.length, parent, options.optionsObj.content || '', options.optionsObj);

    addedElements.push(text);

    currrentElement = currrentElement.parentElement.appendChild(
      text.createElement(),
    );
  } else {
    const text = new TextElement(
      addedElements.length,
      addedElements[addedElements.length - 1],
      options.optionsObj.content || '',
      options.optionsObj,
    );

    addedElements.push(text);

    currrentElement = currrentElement.appendChild(text.createElement(options.optionsArray.join(';')));

    currrentElement.textContent = options.optionsObj.content;
    
  }
});

// buttonBtn.addEventListener('click', () => {
//   if (!(addedElements[addedElements.length - 1] instanceof ColumnElement)) {
//     const parent = addedElements.findLast(
//       (element) => element instanceof ColumnElement,
//     );
//     if (parent === undefined) return;

//     const button = new ButtonElement(addedElements.length, parent, '');

//     addedElements.push(button);

//     currrentElement = currrentElement.parentElement.appendChild(
//       button.createElement(),
//     );
//   } else {
//     const button = new ButtonElement(
//       addedElements.length,
//       addedElements[addedElements.length - 1],
//       // eslint-disable-next-line
//       '<a style=\"color:#fff\" href=\"https://www.google.com\" target=\"_blank\">Button 1</a>',
//       { color: '#FF0000' },
//     );

//     addedElements.push(button);

//     currrentElement = currrentElement.appendChild(button.createElement());
//   }
// });

imageBtn.addEventListener('click', () => {
  const formData = imageBtn.parentElement.parentElement;

  const options = editForm(formData);

  console.log(options.optionsObj);
  console.log(options.optionsArray);

  if (!(addedElements[addedElements.length - 1] instanceof ColumnElement)) {
    const parent = addedElements.findLast(
      (element) => element instanceof ColumnElement,
    );
    if (parent === undefined) return;

    const image = new ImageElement(addedElements.length, parent, options.optionsObj);

    addedElements.push(image);

    currrentElement = currrentElement.parentElement.appendChild(
      image.createElement(options.optionsArray.join(';')),
    );
  } else {
    const image = new ImageElement(
      addedElements.length,
      addedElements[addedElements.length - 1],
      options.optionsObj,
    );

    addedElements.push(image);

    currrentElement = currrentElement.appendChild(image.createElement(options.optionsArray.join(';')));
  }
});
