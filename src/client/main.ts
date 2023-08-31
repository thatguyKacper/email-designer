import './style.css';
import SectionElement from './components/SectionElement.js';
import ColumnElement from './components/ColumnElement.js';
import TextElement from './components/TextElement.js';
import DragAndDropElement from './components/DragAndDropElement';
import TestClass from './components/TestClass';
import BodyElement from './components/BodyElement';
import ButtonElement from './components/ButtonElement';
import ImageElement from './components/ImageElement';

const previewBtn = document.querySelector('#preview') as HTMLButtonElement;
const codeBtn = document.querySelector('#code') as HTMLButtonElement;
const sectionBtn = document.querySelector('#add-section') as HTMLButtonElement;
const sectionEditBtn = document.querySelector('#edit-section') as HTMLButtonElement;
const columnBtn = document.querySelector('#add-column') as HTMLButtonElement;
const textBtn = document.querySelector('#add-text') as HTMLButtonElement;
const buttonBtn = document.querySelector('#add-button') as HTMLButtonElement;
const imageBtn = document.querySelector('#add-image') as HTMLButtonElement;
const output = document.querySelector('.output') as HTMLElement;

const body = new BodyElement(0).createElement();
const main = output.appendChild(body);
let currrentElement = output.appendChild(body);
let clickedElement;

// Create a global array to store added elements
const addedElements: TestClass[] = [new BodyElement(0)];

// Function to generate the components object
function generateComponents() {
  const components = addedElements.map((element) => {
    const { type, attributes, content } = element;
    return { type, attributes, content };
  });

  return components;
  // console.log({ components });
}

async function generateEmail(type) {
  const components = generateComponents();

  try {
    const response = await fetch('/api/v1/designer/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ components }),
    });

    console.log(JSON.stringify({ components }));
    if (response.ok) {
      const htmlResponse = await response.text();
      // console.log(htmlResponse);
      if (type === 'HTML') {
        output.innerHTML = htmlResponse;
      } else {
        output.innerText = htmlResponse;
      }
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

previewBtn.addEventListener('click', () => generateEmail('HTML'));
codeBtn.addEventListener('click', () => generateEmail('CODE'));

function editElement(element, attributes) { 
  const obj ={
    ...element,
    attributes: {
      ...element.attributes,
      ...attributes,
    },
  };
  console.log(obj);
  addedElements[element.id] = obj;
}

const sectionForm = document.querySelector('#section-form');

function editForm(form) {
  let formData = {};

  const inputs = Array.from(form.elements).filter(tag => ["input"].includes(tag.tagName.toLowerCase()))

  // console.log(inputs);
  

  inputs.forEach(element => {
    if (element.value === '' || element.value === '0') {
      return
    } else if (element.name.includes('padding')) {
      formData[element.name] = `${element.value}px`;
    } else if(element.name.includes('border')) {
      formData[element.name] = `${element.value}px solid black`;
    } else if(element.name.includes('height')) {
      formData[element.name] = `${element.value}px`;
    } else if(element.name.includes('width')) {
      formData[element.name] = `${element.value}px`;
    } else {
      formData[element.name] = element.value;
    }

    // console.log(element.name, element.value);
  });

  // console.log(formData);
  editElement(clickedElement, formData)  
}

sectionEditBtn.addEventListener('click', (e) => {
  e.preventDefault();

  editForm(sectionForm)
})

// end test

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

  clickedElement = parent
  
  // const parent = addedElements.findLast(
  //   (element) => extractNumericPart(clickedElement.id) === element.id,
  // );

  
  editElement(parent, {'padding': `2px`})
});

sectionBtn.addEventListener('click', () => {
  const section = new SectionElement(addedElements.length, addedElements[0], {'background-color': '#000'});

  addedElements.push(section);

  currrentElement = main.appendChild(section.createElement('background-color: #000;'));
});

sectionEditBtn.addEventListener('click', () => {
  

});

columnBtn.addEventListener('click', () => {
  if (!(addedElements[addedElements.length - 1] instanceof SectionElement)) {
    const parent = addedElements.findLast(
      (element) => element instanceof SectionElement,
    );

    if (parent === undefined) return;

    const column = new ColumnElement(addedElements.length, parent);

    addedElements.push(column);

    currrentElement = currrentElement.parentElement.appendChild(
      column.createElement('background-color: #FFF;'),
    );
  } else {
    const column = new ColumnElement(
      addedElements.length,
      addedElements[addedElements.length - 1],
      {
        'background-color': '#000',
      },
    );

    addedElements.push(column);

    currrentElement = currrentElement.appendChild(column.createElement('background-color: #FFF;'));
  }
});

textBtn.addEventListener('click', () => {
  if (!(addedElements[addedElements.length - 1] instanceof ColumnElement)) {
    const parent = addedElements.findLast(
      (element) => element instanceof ColumnElement,
    );
    if (parent === undefined) return;

    const text = new TextElement(addedElements.length, parent, '');

    addedElements.push(text);

    currrentElement = currrentElement.parentElement.appendChild(
      text.createElement(),
    );
  } else {
    const text = new TextElement(
      addedElements.length,
      addedElements[addedElements.length - 1],
      'test',
      { color: '#FF0000' },
    );

    addedElements.push(text);

    currrentElement = currrentElement.appendChild(text.createElement());
  }
});

buttonBtn.addEventListener('click', () => {
  if (!(addedElements[addedElements.length - 1] instanceof ColumnElement)) {
    const parent = addedElements.findLast(
      (element) => element instanceof ColumnElement,
    );
    if (parent === undefined) return;

    const button = new ButtonElement(addedElements.length, parent, '');

    addedElements.push(button);

    currrentElement = currrentElement.parentElement.appendChild(
      button.createElement(),
    );
  } else {
    const button = new ButtonElement(
      addedElements.length,
      addedElements[addedElements.length - 1],
      // eslint-disable-next-line
      '<a style=\"color:#fff\" href=\"https://www.google.com\" target=\"_blank\">Button 1</a>',
      { color: '#FF0000' },
    );

    addedElements.push(button);

    currrentElement = currrentElement.appendChild(button.createElement());
  }
});

imageBtn.addEventListener('click', () => {
  if (!(addedElements[addedElements.length - 1] instanceof ColumnElement)) {
    const parent = addedElements.findLast(
      (element) => element instanceof ColumnElement,
    );
    if (parent === undefined) return;

    const image = new ImageElement(addedElements.length, parent);

    addedElements.push(image);

    currrentElement = currrentElement.parentElement.appendChild(
      image.createElement(),
    );
  } else {
    const image = new ImageElement(
      addedElements.length,
      addedElements[addedElements.length - 1],
      { src: 'https://picsum.photos/200' },
    );

    addedElements.push(image);

    currrentElement = currrentElement.appendChild(image.createElement());
  }
});
