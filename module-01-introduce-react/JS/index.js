const content = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
      ],
      [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
      ],
      [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)"
      ]
];

const btnWhyReact = document.getElementById('btn-why-react');
const btnCoreFeatures = document.getElementById('btn-core-features');
const btnResources = document.getElementById('btn-resources');
const tabContemnt = document.getElementById('tab-content');

function displayContent(items) {
    let listContent = "";
    for(const item of items){
        listContent += `<li>${item}</li>`;
    }
}