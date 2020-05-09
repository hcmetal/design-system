console.log("yo");

// Generate spacing and sizing graph
const spacingAndSizingPlaceholder = document.querySelector(
  ".sub-system__graph-placeholder.spacing-and-sizing"
);

function createSpacingAndSizingListWithTemplate(steps) {
  const ul = document.createElement("ul");
  ul.classList.add("sub-system__graph-list");

  const template = document.querySelector(
    ".sub-system__graph-template.spacing-and-sizing"
  );

  steps.forEach((step) => {
    const listItem = document.importNode(template.content, true);

    listItem.querySelector(".sub-system__step-result").textContent = `${
      16 * step
    }px`;

    listItem.querySelector(
      ".sub-system__step-scale"
    ).textContent = `(16 x ${step})`;

    listItem.querySelector(".sub-system__step-bar").style.width = `${
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
