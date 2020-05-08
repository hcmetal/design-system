console.log("yo");

// Generate spacing and sizing list
const spacingAndSizingPlaceholder = document.getElementById(
  "spacing-and-sizing-placeholder"
);

function createSpacingAndSizingListWithTemplate(steps) {
  const ul = document.createElement("ul");

  const template = document.getElementById("spacing-and-sizing-list-item");

  steps.forEach((step) => {
    const listItem = document.importNode(template.content, true);

    listItem.querySelector(".step-result").textContent = `${16 * step}px`;

    listItem.querySelector(".step-explain").textContent = `(16 x ${step})`;

    listItem.querySelector(".step-bar").style.width = `${16 * step}px`;

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
