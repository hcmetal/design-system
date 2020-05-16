console.log("yo");

// Generate gem list
const gemPlaceholder = document.querySelector(".gem__placeholder");

function createGemList(gems) {
  const items = gems.map((gem) => {
    return `<li class="gem__item">${gem}</li>`;
  });

  // console.log(items);

  gemPlaceholder.innerHTML = `<ul class="gem__list">${items.join("")}</ul>`;
}

const gems = [
  `Starting from Scratch`,
  ` - Start with a feature, not a layout`,
  ` - Details comes later`,
  ` - Don't design too much`,
  ` - Choose a personality`,
  ` - Limit your choices`,
  `Hierarchy is Everything`,
  ` - Not all elements are equal`,
  ` - Size isn't everything`,
  ` - Don't use grey text on colored backgrounds`,
  ` - Emphasize by de-emphasizing`,
  ` - Labels are a last resort`,
  ` - Separate visual hierarchy from document hierarchy`,
  ` - Balance weight and contrast`,
  ` - Semantics are secondary`,
  `Layout and Spacing`,
  ` - Start with too much white space`,
  ` - Establish a spacing and sizing system`,
  ` - You don't have to fill the whole screen`,
  ` - Grids are overrated`,
  ` - Relative sizing doesn't scale`,
  ` - Avoid ambiguous spacing`,
  `Designing Text`,
  ` - Establish a type scale`,
  ` - Use good fonts`,
  ` - Keep your line length in check`,
  ` - Baseline, not center`,
  ` - Line-height is proportional`,
  ` - Not every link needs a color`,
  ` - Align with readability in mind`,
  ` - Use letter-spacing effectively`,
  `Working with Images`,
  ` - Use good photos`,
  ` - Text needs consistent contrast`,
  ` - Everything has an intended size`,
  ` - Beware user-uploaded content`,
];

createGemList(gems);

// Generate spacing and sizing list
const spacingAndSizingPlaceholder = document.querySelector(
  ".spacing-and-sizing__list-placeholder"
);

function createSpacingAndSizingListWithTemplate(steps) {
  const ul = document.createElement("ul");
  ul.classList.add("spacing-and-sizing__step-list");
  ul.classList.add("step-list");

  const template = document.querySelector(".spacing-and-sizing__step-template");

  steps.forEach((step) => {
    const listItem = document.importNode(template.content, true);

    listItem.querySelector(".spacing-and-sizing__step-result").textContent = `${
      16 * step
    }px`;

    listItem.querySelector(
      ".spacing-and-sizing__step-scale"
    ).textContent = `(16 x ${step})`;

    listItem.querySelector(".spacing-and-sizing__step-bar").style.width = `${
      16 * step
    }px`;

    ul.appendChild(listItem);
  });

  spacingAndSizingPlaceholder.replaceWith(ul);
}

const spacingAndSizingSteps = [
  0.25,
  0.5,
  0.75,
  1,
  1.5,
  2,
  3,
  4,
  6,
  8,
  12,
  16,
  24,
  32,
  40,
  48,
];

createSpacingAndSizingListWithTemplate(spacingAndSizingSteps);

// Generate type scale list
const typeScalePlaceholder = document.querySelector(
  ".type-scale__list-placeholder"
);

function createTypeScaleListWithTemplate(steps) {
  const ul = document.createElement("ul");
  ul.classList.add("type-scale__step-list");
  ul.classList.add("step-list");

  const template = document.querySelector(".type-scale__step-template");

  steps.forEach((step) => {
    const listItem = document.importNode(template.content, true);

    listItem.querySelector(
      ".type-scale__step-result"
    ).textContent = `${step}px`;

    listItem.querySelector(
      ".type-scale__step-sample-text"
    ).style.fontSize = `${step}px`;

    ul.appendChild(listItem);
  });

  typeScalePlaceholder.replaceWith(ul);
}

const typeScaleSteps = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72];

createTypeScaleListWithTemplate(typeScaleSteps);
