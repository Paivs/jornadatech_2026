import { classes, schedule } from "./event-data.mjs";

const groupCount = (count) => `${count} ${count === 1 ? "grupo" : "grupos"}`;
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

function renderSession(period, hours, groups) {
  const rows = Object.entries(groups).map(([className, count]) =>
    `<li><span>${className}</span><span>${groupCount(count)}</span></li>`
  ).join("");
  return `<div class="session">
    <h4>${period} <span>${hours}</span></h4>
    <ul aria-label="Turmas da ${period.toLowerCase()}">${rows}</ul>
  </div>`;
}

export function renderSchedule() {
  return schedule.map(([weekday, morning, afternoon], index) => {
    const date = String(index + 1).padStart(2, "0");
    return `<article class="day" data-reveal>
      <p>${weekday.toUpperCase()}</p>
      <h3><time datetime="2026-12-${date}">${date} <span>DEZ</span></time></h3>
      ${renderSession("Manhã", "8h às 11h", morning)}
      ${renderSession("Tarde", "14h às 17h", afternoon)}
    </article>`;
  }).join("\n");
}

function renderProject([name, description, memberNames, pending], className) {
  const [manager, ...members] = memberNames.split(", ");
  return `<article class="project" data-reveal>
    <p class="project-class">${className}</p>
    <h4>${escapeHtml(name)}</h4>
    <p>${escapeHtml(description)}</p>
    <dl>
      <div><dt>Gerente de projetos</dt><dd>${escapeHtml(manager)}</dd></div>
      <div><dt>Demais integrantes</dt><dd>${pending ? "A confirmar" : escapeHtml(members.join(", "))}</dd></div>
    </dl>
  </article>`;
}

export function renderCatalog() {
  return classes.map(([className, semester, projects]) => {
    const cards = [...projects].sort(([first], [second]) => first.localeCompare(second, "pt-BR"))
      .map((project) => renderProject(project, className)).join("\n");
    return `<details class="project-class-group" open>
      <summary><span><svg class="icon" aria-hidden="true" focusable="false"><use href="#icon-team"/></svg>${className} <span class="semester">${semester}º semestre</span></span><span class="project-count">${groupCount(projects.length)}</span></summary>
      <div class="project-grid">${cards}</div>
    </details>`;
  }).join("\n");
}
