import "./style.scss";
const resume = require("./assets/Jack_Lo_Resume_2025.pdf");
console.log("Hello from the console!");

// function createSkillCard(skill) {
//   const skillImg = document.createElement("img");
//   skillImg.className = "skill-icon";
//   skillImg.src = `./assets/skills-icons/${skill}.jpg`
//   skillImg.alt = `Icon for ${skill}.`

//   const skillName = document.createElement("p");
//   skillName.className = "skill-name";
//   skillName.textContent = skill;

//   const skillCard = document.createElement("article");
//   skillCard.className = "skill-card";
//   skillCard.appendChild(skillImg);
//   skillCard.appendChild(skillName);

//   return skillCard;
// }

// const skills = []
// skills.push(["JavaScript", "TypeScript", "React", "Node", "HTML5", "CSS3"])
// skills.push(["GraphQL", "PostgreSQL", "MySQL", "pgAdmin", "Liquibase,", "Postman",])
// skills.push(["Flask", "Python", "Java", "Scala", "R", "C"])
// skills.push(["Git", "Linux", "Docker", "Singularity", "HPC", "Agile", "CI/CD"])

// const skillsSection = document.querySelector("#skills-section")
// for (const row of skills) {
//   const skillsRow = document.createElement("div");
//   skillsRow.className = "skills-row";

//   row.forEach((skill) => {
//     skillsRow.appendChild(createSkillCard(skill));
//   })

//   skillsSection.appendChild(skillsRow);
// }

