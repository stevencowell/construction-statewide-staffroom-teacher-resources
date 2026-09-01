(function () {
  "use strict";

  const data = window.CONSTRUCTION_DATA;
  const resourceData = window.CONSTRUCTION_RESOURCE_DATA;
  if (!data || !resourceData) return;

  const resources = resourceData.resources;
  const ROOT = data.meta.staffroomRoot;
  const FILES_PAGE = "https://schoolsnsw.sharepoint.com/sites/VETstatewidestaffroom/Shared%20Documents/Forms/AllItems.aspx?id=";

  const CATEGORY_META = {
    planning: {
      label: "Plan & prepare",
      kicker: "Planning resources",
      description: "Programs, teacher references and professional preparation for confident delivery."
    },
    teaching: {
      label: "Teach & demonstrate",
      kicker: "Classroom delivery",
      description: "Presentations, handouts and demonstrations that support teacher explanation."
    },
    safety: {
      label: "Safety & compliance",
      kicker: "WHS and compliance",
      description: "Resources for safe work, induction and required compliance checks."
    },
    practical: {
      label: "Practical & project",
      kicker: "Technical delivery",
      description: "Projects, drawings, specifications, calculations, tools and materials."
    },
    pathways: {
      label: "Review & pathways",
      kicker: "Progression and revision",
      description: "HSC revision, work placement, careers and SBAT pathway resources."
    },
    controlled: {
      label: "Staff-only / RTO-controlled",
      kicker: "Controlled boundary",
      description: "Assessment-linked orientation that remains subject to current RTO controls."
    },
    reference: {
      label: "Other Staffroom files",
      kicker: "Reference collection",
      description: "Useful authenticated Staffroom files that do not fit a narrower teaching-purpose group."
    }
  };

  const PURPOSE_CATEGORY = {
    "program-planning": "planning",
    "teacher-reference": "planning",
    "professional-learning": "planning",
    "lesson-presentation": "teaching",
    "student-resource": "teaching",
    "video-demonstration": "teaching",
    safety: "safety",
    "practical-project": "practical",
    "drawing-specification": "practical",
    "calculation-template": "practical",
    "hsc-revision": "pathways",
    "work-placement": "pathways",
    "careers-sbat": "pathways",
    "controlled-orientation": "controlled",
    other: "reference"
  };

  const CATEGORY_ORDER = ["planning", "teaching", "safety", "practical", "pathways", "controlled", "reference"];

  const TASK_GROUPS = [
    {
      id: "entry",
      category: "safety",
      kicker: "Course entry",
      label: "Entry and compliance",
      description: "Start with White Card delivery and the RTO-controlled induction boundary.",
      taskIds: ["task-1"]
    },
    {
      id: "foundations",
      category: "teaching",
      kicker: "Common Year 11 pathway",
      label: "Year 11 foundations",
      description: "Build tools, materials, safe-work, measurement and calculation knowledge.",
      taskIds: ["task-2", "task-3", "task-4"]
    },
    {
      id: "options",
      category: "pathways",
      kicker: "School-selected pathway",
      label: "Trade option pathways",
      description: "Choose the authorised bricklaying, tiling or joinery option with the RTO.",
      taskIds: ["task-5-1", "task-5-2", "task-5-3"]
    },
    {
      id: "project",
      category: "planning",
      kicker: "Integrated delivery",
      label: "Planning and integrated project",
      description: "Connect plans, specifications, work organisation and the group construction project.",
      taskIds: ["task-6", "task-7"]
    }
  ];

  const TASK_CATEGORY = {
    "task-1": "safety",
    "task-2": "practical",
    "task-3": "safety",
    "task-4": "planning",
    "task-5-1": "practical",
    "task-5-2": "practical",
    "task-5-3": "practical",
    "task-6": "planning",
    "task-7": "practical"
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function folderUrl(path) {
    const clean = String(path || "").replace(/^\/+|\/+$/g, "");
    return FILES_PAGE + encodeURIComponent(ROOT + (clean ? "/" + clean : ""));
  }

  function externalAnchor(url, label, className = "text-link") {
    return `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)} <span aria-hidden="true">↗</span><span class="sr-only"> (opens authenticated SharePoint in a new tab)</span></a>`;
  }

  function taskUrl(id) {
    return `task.html?id=${encodeURIComponent(id)}`;
  }

  function libraryUrl(filters = {}) {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "" && value !== false) params.set(key, String(value));
    });
    const query = params.toString();
    return `library.html${query ? "?" + query : ""}`;
  }

  function taskName(id) {
    const task = data.tasks.find(item => item.id === id);
    return task ? `Task ${task.order} — ${task.title}` : id;
  }

  function dateLabel(value) {
    if (!value) return "Date not supplied";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "short", year: "numeric" }).format(date);
  }

  function statusClass(resource) {
    if (resource.controlled) return "controlled";
    if (resource.currencyStatus.startsWith("Draft")) return "draft";
    if (resource.currencyStatus.startsWith("Archive")) return "archive";
    if (resource.currencyStatus.startsWith("Dated")) return "dated";
    if (resource.currencyStatus.startsWith("Duplicate")) return "duplicate";
    return "verify";
  }

  function categoryForPurpose(purpose) {
    return PURPOSE_CATEGORY[purpose] || "reference";
  }

  function categoryLabel(category) {
    return CATEGORY_META[category]?.label || CATEGORY_META.reference.label;
  }

  function categoryBanner(id, category, title, description, countText = "", headingLevel = "h3", kicker = "") {
    const meta = CATEGORY_META[category] || CATEGORY_META.reference;
    const heading = headingLevel === "h2" ? "h2" : "h3";
    return `<header class="category-banner" data-category="${escapeHtml(category)}">
      <div>
        <p class="category-kicker">${escapeHtml(kicker || meta.kicker)}</p>
        <${heading} id="${escapeHtml(id)}">${escapeHtml(title)}</${heading}>
        <p>${escapeHtml(description)}</p>
      </div>
      ${countText ? `<span class="category-count">${escapeHtml(countText)}</span>` : ""}
    </header>`;
  }

  function groupedTaskCards(cardRenderer, prefix) {
    return TASK_GROUPS.map(group => {
      const groupTasks = group.taskIds.map(id => data.tasks.find(task => task.id === id)).filter(Boolean);
      const countText = `${groupTasks.length} ${groupTasks.length === 1 ? "guide" : "guides"}`;
      return `<section class="category-group" data-category="${escapeHtml(group.category)}" aria-labelledby="${escapeHtml(prefix)}-${escapeHtml(group.id)}-title">
        ${categoryBanner(`${prefix}-${group.id}-title`, group.category, group.label, group.description, countText, "h3", group.kicker)}
        <div class="card-grid category-card-grid cards-${Math.min(groupTasks.length, 3)}">${groupTasks.map(cardRenderer).join("")}</div>
      </section>`;
    }).join("");
  }

  function resourceCard(resource, options = {}) {
    const compact = options.compact ? " compact" : "";
    const category = categoryForPurpose(resource.purpose);
    const taskBadges = resource.taskIds.slice(0, 3).map(id => `<span class="tag">${escapeHtml(taskName(id))}</span>`).join("");
    const unitBadges = resource.unitCodes.slice(0, 3).map(code => `<span class="tag unit">${escapeHtml(code)}</span>`).join("");
    return `<article class="resource-card${compact}" data-category="${escapeHtml(category)}">
      <div class="card-category-line"><span class="card-category-label">${escapeHtml(categoryLabel(category))}</span><span class="purpose-label">${escapeHtml(resource.purposeLabel)}</span></div>
      <div class="resource-badges">
        <span class="file-badge">${escapeHtml(resource.format)}</span>
        ${resource.essential ? '<span class="status-badge essential">Essential</span>' : ""}
        <span class="status-badge ${statusClass(resource)}">${escapeHtml(resource.currencyStatus)}</span>
      </div>
      <h3>${escapeHtml(resource.fileName)}</h3>
      <p class="resource-purpose">${escapeHtml(resource.useFor)}</p>
      ${compact ? "" : `<div class="tag-row">${taskBadges}${unitBadges}</div>
      <p class="breadcrumb-path">${escapeHtml(resource.sourceBreadcrumb.join(" › "))}</p>
      <p class="modified">Staffroom modified ${escapeHtml(dateLabel(resource.lastModifiedUtc))}</p>`}
      <div class="resource-actions">
        ${externalAnchor(resource.directUrl, "Open exact file", "button direct")}
        ${compact ? "" : externalAnchor(resource.containingFolderUrl, "Containing folder", "folder-fallback")}
      </div>
    </article>`;
  }

  function compactResourceLinks(items) {
    if (!items.length) {
      return '<p class="resource-gap">No suitable direct Staffroom file was identified for this block — Teacher/RTO to confirm.</p>';
    }
    return `<div class="block-resources" data-category="reference"><h4>Direct Staffroom resources</h4><ul>${items.map(item => `<li><a href="${escapeHtml(item.directUrl)}" target="_blank" rel="noopener"><span class="mini-file">${escapeHtml(item.format)}</span><span>${escapeHtml(item.fileName)}</span><span aria-hidden="true">↗</span><span class="sr-only"> (opens authenticated SharePoint in a new tab)</span></a></li>`).join("")}</ul></div>`;
  }

  function resourcesForTask(taskId) {
    return resources.filter(resource => resource.taskIds.includes(taskId));
  }

  function blockResources(taskId, index) {
    const queries = resourceData.taskBlockQueries[taskId]?.[index] || [];
    const taskResources = resourcesForTask(taskId);
    const found = [];
    queries.forEach(query => {
      const needle = query.toLocaleLowerCase();
      const match = taskResources.find(resource => resource.relativePath.toLocaleLowerCase().includes(needle));
      if (match && !found.some(item => item.id === match.id)) found.push(match);
    });
    if (!found.length) {
      taskResources.filter(resource => resource.essential && !resource.controlled).slice(0, 2).forEach(resource => found.push(resource));
    }
    return found.slice(0, 4);
  }

  function markCurrentNav() {
    const page = document.body.dataset.page;
    document.querySelectorAll(`[data-nav="${page}"]`).forEach(link => link.setAttribute("aria-current", "page"));
  }

  function taskCard(task) {
    const taskResources = resourcesForTask(task.id);
    const essentialCount = taskResources.filter(resource => resource.essential).length;
    const category = TASK_CATEGORY[task.id] || "reference";
    return `<article class="card task-card" data-category="${escapeHtml(category)}">
      <p class="card-category-label">${escapeHtml(categoryLabel(category))}</p>
      <span class="task-number">${escapeHtml(task.order)}</span>
      <p class="kicker">${escapeHtml(task.phase)}</p>
      <h3>${escapeHtml(task.title)}</h3>
      <p>${escapeHtml(task.control.delivery)}</p>
      <p class="meta">${task.units.map(unit => escapeHtml(unit.code)).join(" · ") || "RTO-controlled source set"}</p>
      <p class="direct-count"><strong>${taskResources.length}</strong> direct files · <strong>${essentialCount}</strong> curated essentials</p>
      <div class="card-actions"><a class="text-link" href="${taskUrl(task.id)}">Open teacher guide <span aria-hidden="true">→</span></a></div>
    </article>`;
  }

  function renderHome() {
    const taskGrid = document.querySelector("#task-grid");
    if (taskGrid) taskGrid.innerHTML = groupedTaskCards(taskCard, "home-task");

    const resourceGrid = document.querySelector("#resource-grid");
    if (resourceGrid) {
      const jobs = [
        { title: "Prepare Task 2", text: "Programs, teacher guides, presentations, tool sheets and materials resources.", category: "planning", filters: { task: "task-2", essential: 1 } },
        { title: "Find a presentation", text: "Open the exact PowerPoint instead of browsing 18 unit folders.", category: "teaching", filters: { purpose: "lesson-presentation" } },
        { title: "Choose a practical drawing", text: "Search project plans, drawing sets and specifications by task.", category: "practical", filters: { purpose: "drawing-specification" } },
        { title: "Find WHS material", text: "Risk, PPE, asbestos, emergency and safe-work teaching resources.", category: "safety", filters: { purpose: "safety" } },
        { title: "Prepare HSC revision", text: "Questions, planning templates, topic summaries and revision decks.", category: "pathways", filters: { purpose: "hsc-revision" } },
        { title: "Prepare work placement", text: "Journals, logs and Staffroom work-placement support files.", category: "pathways", filters: { purpose: "work-placement" } }
      ];
      resourceGrid.innerHTML = CATEGORY_ORDER.map(category => {
        const categoryJobs = jobs.filter(job => job.category === category);
        if (!categoryJobs.length) return "";
        const meta = CATEGORY_META[category];
        return `<section class="category-group" data-category="${escapeHtml(category)}" aria-labelledby="home-job-${escapeHtml(category)}-title">
          ${categoryBanner(`home-job-${category}-title`, category, meta.label, meta.description, `${categoryJobs.length} ${categoryJobs.length === 1 ? "shortcut" : "shortcuts"}`, "h3")}
          <div class="card-grid category-card-grid cards-${Math.min(categoryJobs.length, 3)}">${categoryJobs.map(job => {
            const count = resources.filter(resource => !job.filters.purpose || resource.purpose === job.filters.purpose)
              .filter(resource => !job.filters.task || resource.taskIds.includes(job.filters.task))
              .filter(resource => !job.filters.essential || resource.essential).length;
            return `<article class="card job-card" data-category="${escapeHtml(job.category)}"><p class="card-category-label">${escapeHtml(categoryLabel(job.category))}</p><p class="kicker">${count} direct file${count === 1 ? "" : "s"}</p><h3>${escapeHtml(job.title)}</h3><p>${escapeHtml(job.text)}</p><div class="card-actions"><a class="text-link" href="${libraryUrl(job.filters)}">Open exact resources <span aria-hidden="true">→</span></a></div></article>`;
          }).join("")}</div>
        </section>`;
      }).join("");
    }

    const sourceCount = document.querySelector("#source-file-count");
    if (sourceCount) sourceCount.textContent = String(resourceData.meta.sourceCount);
  }

  function unitRows(tasks) {
    return tasks.flatMap(task => task.units.map(unit => `<tr>
      <td>${escapeHtml(unit.code)}</td>
      <td>${escapeHtml(unit.title)}</td>
      <td>${escapeHtml(unit.status)}</td>
      <td>${escapeHtml(task.order)} — ${escapeHtml(task.title)}</td>
      <td>${escapeHtml(unit.hours)}</td>
    </tr>`)).join("");
  }

  function renderProgram() {
    const table = document.querySelector("#program-unit-body");
    if (table) table.innerHTML = unitRows(data.tasks);

    const flow = document.querySelector("#program-flow");
    if (flow) {
      const programCard = task => {
        const taskResources = resourcesForTask(task.id);
        const category = TASK_CATEGORY[task.id] || "reference";
        return `<article class="card program-card" data-category="${escapeHtml(category)}">
          <p class="card-category-label">${escapeHtml(categoryLabel(category))}</p>
          <p class="kicker">Section ${escapeHtml(task.order)}</p>
          <h3>${escapeHtml(task.title)}</h3>
          <p>${escapeHtml(task.control.delivery)} · ${escapeHtml(task.control.cohort)}</p>
          <p class="meta">${task.sequence.length} delivery blocks · ${taskResources.length} direct files</p>
          <div class="card-actions"><a class="text-link" href="${taskUrl(task.id)}">Open section and resources <span aria-hidden="true">→</span></a></div>
        </article>`;
      };
      flow.innerHTML = groupedTaskCards(programCard, "program-task");
    }
  }

  function taskResourceSection(title, intro, items, className = "", category = "reference", id = "resource-section") {
    if (!items.length) return "";
    return `<section class="section ${className} category-section" data-category="${escapeHtml(category)}"><div class="section-inner">
      ${categoryBanner(id, category, title, intro, `${items.length} ${items.length === 1 ? "file" : "files"}`, "h2")}
      <div class="resource-card-grid">${items.map(resource => resourceCard(resource)).join("")}</div>
    </div></section>`;
  }

  function renderTask() {
    const root = document.querySelector("#task-content");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const requested = params.get("id") || data.tasks[0].id;
    const task = data.tasks.find(item => item.id === requested);
    if (!task) {
      window.location.replace(taskUrl(data.tasks[0].id));
      return;
    }

    document.title = `Task ${task.order}: ${task.title} | ${data.meta.shortTitle}`;
    const switcher = document.querySelector("#task-select");
    if (switcher) {
      switcher.innerHTML = data.tasks.map(item => `<option value="${escapeHtml(item.id)}"${item.id === task.id ? " selected" : ""}>Task ${escapeHtml(item.order)} — ${escapeHtml(item.title)}</option>`).join("");
      switcher.addEventListener("change", event => { window.location.href = taskUrl(event.target.value); });
    }

    const taskFiles = resourcesForTask(task.id);
    const essentials = taskFiles.filter(resource => resource.essential && !resource.controlled).slice(0, 10);
    const programs = taskFiles.filter(resource => resource.purpose === "program-planning");
    const teacherPrep = taskFiles.filter(resource => resource.essential && ["program-planning", "teacher-reference", "safety"].includes(resource.purpose) && !resource.controlled).slice(0, 8);
    const practical = taskFiles.filter(resource => ["practical-project", "drawing-specification", "calculation-template"].includes(resource.purpose) && !resource.controlled).slice(0, 9);
    const reinforce = taskFiles.filter(resource => ["lesson-presentation", "hsc-revision", "video-demonstration"].includes(resource.purpose) && !resource.controlled).slice(0, 9);
    const controlled = taskFiles.filter(resource => resource.controlled).slice(0, 8);
    const heroPrimary = programs[0] || essentials.find(resource => /flow chart|teacher (guide|manual)/i.test(resource.fileName)) || essentials[0] || taskFiles[0];
    const taskCategory = TASK_CATEGORY[task.id] || "reference";

    root.innerHTML = `
      <section class="page-hero category-hero" data-category="${escapeHtml(taskCategory)}"><div class="hero-inner">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><span>Task ${escapeHtml(task.order)}</span></nav>
        <p class="eyebrow">${escapeHtml(task.phase)}</p>
        <h1>Task ${escapeHtml(task.order)} — ${escapeHtml(task.title)}</h1>
        <p class="hero-lead">This guide brings together ${taskFiles.length} named Staffroom files, with the most useful resources placed beside the relevant delivery block.</p>
        <div class="hero-actions">
          ${heroPrimary ? externalAnchor(heroPrimary.directUrl, heroPrimary.purpose === "program-planning" ? "Open exact source program" : "Open first essential file", "button primary") : ""}
          <a class="button secondary" href="${libraryUrl({ task: task.id })}">See all ${taskFiles.length} task files</a>
        </div>
      </div></section>

      <section class="section compact category-section" data-category="planning"><div class="section-inner">
        ${categoryBanner(`task-${task.id}-controls`, "planning", "Guide controls", "Check the source status, delivery context and local decisions before using this guide.", `${Object.keys(task.control).length} controls`, "h2")}
        <p class="notice"><strong>Direct-file layer:</strong> every primary resource button below targets an exact Staffroom file. Departmental sign-in is still required, and drafts or controlled material remain clearly labelled.</p>
        <div class="control-grid" aria-label="Source control information">
          ${Object.entries(task.control).map(([label, value]) => `<div class="control-item"><div class="control-label">${escapeHtml(label.replace(/([A-Z])/g, " $1"))}</div><div class="control-value">${escapeHtml(value)}</div></div>`).join("")}
        </div>
      </div></section>

      ${taskResourceSection("Task essentials", "Start here: the source program, teacher guidance and core teaching files selected from the Staffroom.", essentials, "alt", "planning", `task-${task.id}-essentials`)}
      ${taskResourceSection("Before delivery", "Open these exact files while checking local sequence, safety, staffing, facilities and RTO requirements.", teacherPrep, "", "planning", `task-${task.id}-before-delivery`)}

      <section class="section alt category-section" data-category="planning"><div class="section-inner">
        ${categoryBanner(`task-${task.id}-units`, "planning", "Units and hours", "These values reproduce the Staffroom draft. They are not independently corrected or certified as current.", `${task.units.length} ${task.units.length === 1 ? "unit" : "units"}`, "h2", "Source-stated mapping")}
        <div class="table-wrap" tabindex="0" role="region" aria-label="Horizontally scrollable unit mapping table">
          <table><thead><tr><th>Code</th><th>Source title</th><th>Source status</th><th>Indicative hours</th></tr></thead><tbody>
            ${task.units.map(unit => `<tr><td>${escapeHtml(unit.code)}</td><td>${escapeHtml(unit.title)}</td><td>${escapeHtml(unit.status)}</td><td>${escapeHtml(unit.hours)}</td></tr>`).join("")}
          </tbody></table>
        </div>
      </div></section>

      <section class="section category-section" data-category="teaching"><div class="section-inner">
        ${categoryBanner(`task-${task.id}-sequence`, "teaching", "Delivery blocks with the files already found", "The resource links sit where they are useful. You no longer need to open the task folder and hunt for them.", `${task.sequence.length} delivery blocks`, "h2", "Teach in sequence")}
        <div class="sequence">
          ${task.sequence.map((block, index) => `<article class="sequence-item" data-category="teaching"><div class="sequence-index">${String(index + 1).padStart(2, "0")}</div><div><h3>${escapeHtml(block.focus)}</h3><p>${escapeHtml(block.teaching)}</p><div class="sequence-meta"><div><strong>Unit/content relationship</strong><br>${escapeHtml(block.mapping)}</div><div><strong>Checkpoint / boundary</strong><br>${escapeHtml(block.checkpoint)}</div></div>${compactResourceLinks(blockResources(task.id, index))}</div></article>`).join("")}
        </div>
      </div></section>

      ${taskResourceSection("Practical and project pack", "Drawings, specifications, calculations and practical resources already filtered to this task.", practical, "alt", "practical", `task-${task.id}-practical`)}
      ${taskResourceSection("Reinforce and revise", "Presentations, demonstrations and revision resources matched to this task or its unit codes.", reinforce, "", "pathways", `task-${task.id}-reinforce`)}
      ${taskResourceSection("Controlled assessment orientation", "These are exact Staffroom pointers only. Do not copy answers, assessor guidance or learner evidence into this site.", controlled, "alt", "controlled", `task-${task.id}-controlled`)}

      <section class="section category-section" data-category="reference"><div class="section-inner two-column">
        <div>${categoryBanner(`task-${task.id}-complete-index`, "reference", `${taskFiles.length} exact file links`, "The complete task-filtered index includes manuals, handouts, presentations, drawings, revision and staff-only orientation files.", "Complete index", "h2", "Everything for this task")}<a class="button direct" href="${libraryUrl({ task: task.id })}">Open the complete Task ${escapeHtml(task.order)} file index</a></div>
        <aside class="side-panel"><h3>Teacher/RTO to confirm</h3><ul class="check-list">${task.confirm.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul><p class="folder-note">Folder fallback only:</p>${externalAnchor(folderUrl(task.sourcePath), "Browse the original task folder")}</aside>
      </div></section>`;

    if (switcher) switcher.value = task.id;
  }

  function renderLibrary() {
    const root = document.querySelector("#library-groups");
    const search = document.querySelector("#resource-search");
    const count = document.querySelector("#result-count");
    const taskFilter = document.querySelector("#task-filter");
    const purposeFilter = document.querySelector("#purpose-filter");
    const formatFilter = document.querySelector("#format-filter");
    const statusFilter = document.querySelector("#status-filter");
    const essentialOnly = document.querySelector("#essential-only");
    const includeArchive = document.querySelector("#include-archive");
    if (!root || !search || !count || !taskFilter || !purposeFilter || !formatFilter || !statusFilter || !essentialOnly || !includeArchive) return;

    const params = new URLSearchParams(window.location.search);
    taskFilter.innerHTML = '<option value="">All tasks and options</option>' + data.tasks.map(task => `<option value="${escapeHtml(task.id)}">Task ${escapeHtml(task.order)} — ${escapeHtml(task.title)}</option>`).join("");
    purposeFilter.innerHTML = '<option value="">All teaching purposes</option>' + Object.entries(resourceData.purposes).map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("");
    const formatValues = [...new Set(resources.map(resource => resource.format))].sort();
    formatFilter.innerHTML = '<option value="">All file types</option>' + formatValues.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");

    search.value = params.get("q") || "";
    taskFilter.value = params.get("task") || "";
    purposeFilter.value = params.get("purpose") || "";
    formatFilter.value = params.get("format") || "";
    statusFilter.value = params.get("status") || "";
    essentialOnly.checked = params.get("essential") === "1";
    includeArchive.checked = params.get("archive") === "1";

    function matchesStatus(resource, value) {
      if (!value) return true;
      if (value === "controlled") return resource.controlled;
      if (value === "draft") return resource.currencyStatus.startsWith("Draft");
      if (value === "dated") return resource.currencyStatus.startsWith("Dated") || resource.currencyStatus.startsWith("Duplicate");
      if (value === "verify") return resource.currencyStatus === "Verify current Staffroom version";
      return true;
    }

    function updateUrl() {
      const next = new URLSearchParams();
      if (search.value.trim()) next.set("q", search.value.trim());
      if (taskFilter.value) next.set("task", taskFilter.value);
      if (purposeFilter.value) next.set("purpose", purposeFilter.value);
      if (formatFilter.value) next.set("format", formatFilter.value);
      if (statusFilter.value) next.set("status", statusFilter.value);
      if (essentialOnly.checked) next.set("essential", "1");
      if (includeArchive.checked) next.set("archive", "1");
      history.replaceState(null, "", `library.html${next.toString() ? "?" + next.toString() : ""}`);
    }

    function draw() {
      const needle = search.value.trim().toLocaleLowerCase();
      const filtered = resources.filter(resource => {
        if (!includeArchive.checked && resource.hideByDefault) return false;
        if (taskFilter.value && !resource.taskIds.includes(taskFilter.value)) return false;
        if (purposeFilter.value && resource.purpose !== purposeFilter.value) return false;
        if (formatFilter.value && resource.format !== formatFilter.value) return false;
        if (!matchesStatus(resource, statusFilter.value)) return false;
        if (essentialOnly.checked && !resource.essential) return false;
        if (!needle) return true;
        const haystack = [resource.fileName, resource.relativePath, resource.purposeLabel, resource.useFor, resource.currencyStatus, ...resource.unitCodes, ...resource.taskIds.map(taskName)].join(" ").toLocaleLowerCase();
        return haystack.includes(needle);
      }).sort((a, b) => Number(b.essential) - Number(a.essential) || a.fileName.localeCompare(b.fileName, "en-AU", { numeric: true }));

      const grouped = Object.entries(resourceData.purposes).map(([purpose, label]) => ({
        purpose,
        label,
        items: filtered.filter(resource => resource.purpose === purpose)
      })).filter(group => group.items.length);

      const families = CATEGORY_ORDER.map(category => {
        const purposeGroups = grouped.filter(group => categoryForPurpose(group.purpose) === category);
        if (!purposeGroups.length) return "";
        const total = purposeGroups.reduce((sum, group) => sum + group.items.length, 0);
        const meta = CATEGORY_META[category];
        return `<section class="category-group library-category" data-category="${escapeHtml(category)}" aria-labelledby="library-${escapeHtml(category)}-title">
          ${categoryBanner(`library-${category}-title`, category, meta.label, meta.description, `${total} ${total === 1 ? "file" : "files"}`, "h2")}
          ${purposeGroups.map(group => `<section class="library-purpose" aria-labelledby="library-purpose-${escapeHtml(group.purpose)}"><header class="library-purpose-head" data-category="${escapeHtml(category)}"><div><p class="library-purpose-kicker">${escapeHtml(meta.label)}</p><h3 id="library-purpose-${escapeHtml(group.purpose)}">${escapeHtml(group.label)}</h3><p>${group.items.length} exact Staffroom file${group.items.length === 1 ? "" : "s"}</p></div></header><div class="resource-card-grid">${group.items.map(resource => resourceCard(resource)).join("")}</div></section>`).join("")}
        </section>`;
      }).join("");

      root.innerHTML = families || '<p class="notice">No direct files match those filters. Clear one filter or search with a unit code or filename.</p>';
      count.textContent = `${filtered.length} of ${resources.length} direct Staffroom files shown`;
      updateUrl();
    }

    [search, taskFilter, purposeFilter, formatFilter, statusFilter, essentialOnly, includeArchive].forEach(control => {
      control.addEventListener(control === search ? "input" : "change", draw);
    });
    document.querySelector("#clear-search")?.addEventListener("click", () => {
      search.value = "";
      taskFilter.value = "";
      purposeFilter.value = "";
      formatFilter.value = "";
      statusFilter.value = "";
      essentialOnly.checked = false;
      includeArchive.checked = false;
      draw();
      search.focus();
    });
    draw();
  }

  function closeMobileNavOnSelect() {
    document.querySelectorAll(".mobile-nav a").forEach(link => link.addEventListener("click", () => link.closest("details")?.removeAttribute("open")));
  }

  markCurrentNav();
  renderHome();
  renderProgram();
  renderTask();
  renderLibrary();
  closeMobileNavOnSelect();
})();
