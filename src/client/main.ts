import './style.css';

const output = document.querySelector('.output');
const columnBtn = document.querySelector('#add-column');
const sectionBtn = document.querySelector('#add-section');
const textBtn = document.querySelector('#add-text');

let currentSection = null;
let sectionCount = 0;
let columnCount = 0;
let textCount = 0;
let dragElement = null;
let closestParent = null;

function selectElement() {}

function move() {
  const element = document.getElementById(dragElement);

  closestParent.appendChild(element);

  return element;
}

function dragStart(e) {
  dragElement = e.target.id;
}

function dragEnter(e) {
  e.preventDefault();

  closestParent = e.target.closest('.section');
}

function dragOver() {
  move();
}

function dragLeave() {
  move();
}

function dragDrop(e) {
  e.preventDefault();

  closestParent = e.target.closest('.section');

  move();
}

function createSection() {
  sectionCount++;
  currentSection = document.createElement('div');
  currentSection.classList.add('section');
  currentSection.setAttribute('id', `section-${sectionCount}`);
  currentSection.setAttribute('draggable', 'true');
  output.appendChild(currentSection);

  // currentSection.addEventListener('dragstart', dragStart);
  currentSection.addEventListener('dragenter', dragEnter);
  currentSection.addEventListener('dragover', dragOver);
  currentSection.addEventListener('dragleave', dragLeave);
  // currentSection.addEventListener('drop', dragDrop);
}

function createColumn() {
  if (currentSection === null) return;

  columnCount++;
  const column = document.createElement('div');
  column.classList.add('column');
  column.setAttribute('id', `column-${columnCount}`);
  column.setAttribute('draggable', 'true');
  currentSection.appendChild(column);

  column.addEventListener('dragstart', dragStart);
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragover', dragOver);
  column.addEventListener('dragleave', dragLeave);
  column.addEventListener('drop', dragDrop);
}

function createText() {
  if (currentSection === null) return;

  textCount++;
  const text = document.createElement('input');
  text.classList.add('text');
  text.setAttribute('id', `text-${textCount}`);
  currentSection.setAttribute('draggable', 'true');
  if (
    currentSection.lastElementChild &&
    currentSection.lastElementChild.classList.contains('column')
  ) {
    currentSection.lastElementChild.appendChild(text);
  }

  text.addEventListener('dragstart', dragStart);
  text.addEventListener('dragenter', dragEnter);
  text.addEventListener('dragover', dragOver);
  text.addEventListener('dragleave', dragLeave);
  text.addEventListener('drop', dragDrop);
}

sectionBtn.addEventListener('click', createSection);
columnBtn.addEventListener('click', createColumn);
textBtn.addEventListener('click', createText);
output.addEventListener('click', selectElement);
