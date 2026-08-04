(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const c=[{id:"workstream-1",label:" workstream 1 ",title:"Community Consultation & Topic Prioritization",owner:"Operations Office",status:"On track",progress:78,overview:"Employ empirical research methods to engage with community members and identify culturally significant aspects and sensitive topics, establishing a foundation for ethical AI development and data practices.",updates:["Governance notes were consolidated into a single operating brief.","Weekly decision log template was approved for all coordinators.","Escalation criteria were aligned with leadership review cycles."],previousSteps:["Reviewed current intake process and identified approval bottlenecks.","Mapped roles across contributors, reviewers, and approvers.","Drafted the first version of the operating charter."],nextSteps:["Finalize the approval matrix with legal and finance stakeholders.","Publish the intake checklist to the shared document library.","Schedule a quarterly governance review checkpoint."],documents:[{name:"Governance Charter",filename:"governance-charter.md",content:`# Governance Charter

- Scope: intake and oversight
- Cadence: weekly review
- Owner: Operations Office
`},{name:"Decision Log Template",filename:"decision-log-template.md",content:`# Decision Log Template

| Date | Decision | Owner | Follow-up |
| --- | --- | --- | --- |
`}]},{id:"workstream-2",label:"   workstream 2    ",title:"Data Collection and Curation",owner:"Analytics Team",status:"In review",progress:64,overview:"Identify appropriate data collection methods and tools across GR and institutions to enable effective community engagement in order to curate multimodal datasets that are appropriately annotated to highlight cultural aspects and sensitive topics relevant to communities engaged.",updates:["Core data dictionary is now aligned to the latest business terminology.","Three high-priority quality checks were added to the validation backlog.","Reporting owners confirmed the canonical source for monthly metrics."],previousSteps:["Audited upstream sources and identified gaps in field consistency.","Documented the current reporting stack and access patterns.","Proposed a standard data certification workflow."],nextSteps:["Complete the sampling review for the highest-risk datasets.","Publish a draft data certification checklist.","Confirm the refresh schedule for executive dashboards."],documents:[{name:"Data Dictionary",filename:"data-dictionary.md",content:`# Data Dictionary

- Metric definitions
- Source ownership
- Refresh cadence
`},{name:"Quality Checks Register",filename:"quality-checks-register.csv",content:`check,owner,status
format validation,analytics,planned
source reconciliation,analytics,active
`}]},{id:"workstream-3",label:"Workstream 3",title:"Benchmark and Framework Development; Model Evaluation",owner:"Program Management",status:"Needs decisions",progress:52,overview:"Develop robust evaluation frameworks and benchmarks to assess AI models for cultural competency and sensitivity, and systematically evaluate existing models.",updates:["Two dependency items were moved to the critical path review.","The milestone plan now includes a shared dependency register.","Leads requested a decision on the final launch window."],previousSteps:["Consolidated all stream schedules into one master timeline.","Compared the draft dates against the availability of core reviewers.","Captured timing risks in the central issue log."],nextSteps:["Resolve launch window options with sponsors.","Update the dependency register after the next planning meeting.","Publish the revised milestone view for all work streams."],documents:[{name:"Master Timeline",filename:"master-timeline.md",content:`# Master Timeline

- Discovery complete
- Validation in progress
- Launch decision pending
`},{name:"Dependency Register",filename:"dependency-register.csv",content:`item,owner,impact
approval window,program management,high
design review,product team,medium
`}]},{id:"workstream-4",label:"Workstream 4",title:"Socialization, Partnership and Model Enhancement",owner:"Communications Team",status:"At risk",progress:46,overview:"Disseminate research findings, collaborate with model developers, and drive model improvements for greater cultural competency and sensitivity.",updates:["Audience segmentation was refined for leadership, managers, and contributors.","The first communication draft is now aligned to the approved tone of voice.","Adoption risks were added to the weekly stakeholder review."],previousSteps:["Interviewed representative users to identify communication gaps.","Mapped the sponsor and stakeholder network.","Outlined the key change messages for the program launch."],nextSteps:["Prepare the first leadership update for review.","Build the FAQ sheet and audience-specific support notes.","Confirm the training calendar with operations leads."],documents:[{name:"Communication Brief",filename:"communication-brief.md",content:`# Communication Brief

- Audience: leadership and managers
- Format: weekly update
- Channel: email and dashboard
`},{name:"Stakeholder Map",filename:"stakeholder-map.csv",content:`stakeholder,group,priority
sponsors,leadership,high
team managers,operations,high
`}]},{id:"workstream-5",label:"Workstream 5",title:"Programmatic Development and Coordination",owner:"Risk Office",status:"Monitoring",progress:71,overview:"Establish a robust program structure to empower student and faculty engagement, build student research capacity, facilitate effective project collaboration, translate research findings into practical applications, and foster strong partnerships among research collaborators.",updates:["Risk scoring was refreshed after the latest control review.","Support ownership was clarified for launch and steady-state phases.","Compliance evidence collection is now tracked against a single checklist."],previousSteps:["Reviewed existing control controls and evidence requirements.","Updated the central risk log with new mitigation actions.","Defined the support handoff process for operational teams."],nextSteps:["Complete the final compliance evidence bundle.","Review mitigation owners for the top-priority risks.","Validate the support model with service desk leads."],documents:[{name:"Risk Register",filename:"risk-register.csv",content:`risk,owner,score,mitigation
access review,Risk Office,high,scheduled
training gaps,Support Lead,medium,planned
`},{name:"Compliance Checklist",filename:"compliance-checklist.md",content:`# Compliance Checklist

- Evidence pack complete
- Owner sign-off recorded
- Review date scheduled
`}]}],h=["Program brief and operating cadence","Central issue and decision log","Working templates for updates and status reviews","Archive of milestone snapshots and meeting notes"];function m(t){const i=c.map(e=>`
        <a class="stream-nav-link" href="#${e.id}">
          <span>${e.label}</span>
          <!-- <strong>${e.title}</strong> -->
        </a>
      `).join(""),n=c.map(e=>`
        <article class="stream-summary-card">
          <div class="summary-card-top">
            <span class="status-pill status-pill-${l(e.status)}">${e.status}</span>
            <span class="summary-progress">${e.progress}%</span>
          </div>
          <h3>${e.title}</h3>
          <p>${e.overview}</p>
          <a href="#${e.id}" class="text-link">Open work stream</a>
        </article>
      `).join(""),o=c.map(e=>{const s=e.updates.map(a=>`<li>${a}</li>`).join(""),r=e.previousSteps.map(a=>`<li>${a}</li>`).join(""),d=e.nextSteps.map(a=>`<li>${a}</li>`).join(""),p=e.documents.map(a=>`
          <a class="resource-link" href="${u(a.content)}" download="${a.filename}">
            <span>${a.name}</span>
            <small>Download</small>
          </a>
        `).join("");return`
        <article class="workstream-panel" id="${e.id}">
          <div class="panel-header">
            <div>
              <p class="eyebrow">${e.label}</p>
              <h2>${e.title}</h2>
            </div>
            <div class="panel-meta">
              <span class="status-pill status-pill-${l(e.status)}">${e.status}</span>
              <span class="owner-chip">Owner: ${e.owner}</span>
            </div>
          </div>

          <div class="workstream-layout">
            <div class="primary-column">
              <section class="content-card">
                <h3>Overview</h3>
                <p>${e.overview}</p>
              </section>

              <section class="content-card">
                <h3>Recent Updates</h3>
                <ul class="bullet-list">${s}</ul>
              </section>

              <section class="content-card">
                <h3>Previous Steps</h3>
                <ul class="bullet-list">${r}</ul>
              </section>

              <section class="content-card">
                <h3>Next Steps</h3>
                <ul class="bullet-list">${d}</ul>
              </section>
            </div>

            <aside class="side-column">
              <section class="content-card">
                <h3>Progress View</h3>
                <div class="progress-track" aria-label="${e.progress} percent complete">
                  <span style="width: ${e.progress}%"></span>
                </div>
                <div class="metric-row">
                  <div>
                    <strong>${e.progress}%</strong>
                    <span>Overall progress</span>
                  </div>
                  <div>
                    <strong>${e.status}</strong>
                    <span>Current status</span>
                  </div>
                </div>
                <div class="spark-bars" aria-hidden="true">
                  ${v(e.progress)}
                </div>
              </section>

              <section class="content-card">
                <h3>Documents and Resources</h3>
                <div class="resource-list">${p}</div>
              </section>

              <section class="content-card placeholder-card">
                <h3>Future Features</h3>
                <p>Reserved for comments, lightweight approvals, authentication, and activity history in a later release.</p>
              </section>
            </aside>
          </div>
        </article>
      `}).join("");t.innerHTML=`
    <div class="page-shell">
      <header class="hero">
        <div class="hero-copy">
          <p class="eyebrow">The REACH GenAI Consortium</p>
          <h1>Living Hub</h1>
          <p class="hero-summary">
          The REACH GenAI Consortium is a multi-institutional research initiative between Google Research, Google.org and 12 HBCUs. The REACH GenAI effort aims to establish an empirically grounded, community-informed methodology for the evaluation of culturally relevant Generative AI.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#dashboard">Open dashboard</a>
            <a class="button secondary" href="#shared-resources">Shared resources</a>
          </div>
          <div class="hero-notes">
            <span>No login required</span>
            <span>Version 1 is view-only</span>
            <span>Designed for static hosting on Google Cloud</span>
          </div>
        </div>
        <div class="hero-panel">
          <div class="hero-stat">
            <strong>5</strong>
            <span>work streams</span>
          </div>
          <div class="hero-stat">
            <strong>${c.filter(e=>e.status==="On track"||e.status==="Monitoring").length}</strong>
            <span>stable streams</span>
          </div>
          <div class="hero-stat">
            <strong>1</strong>
            <span>shared workspace</span>
          </div>
        </div>
      </header>

      <nav class="top-nav" aria-label="Work stream navigation">
        <a class="nav-link" href="#dashboard">Dashboard</a>
        ${i}
        <a class="nav-link" href="#shared-resources">Shared resources</a>
      </nav>

      <main>
        <section class="dashboard" id="dashboard">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Overview</p>
              <h2>Program dashboard</h2>
            </div>
            <p class="section-summary">
              Quick entry points to each work stream, with the most important status and progress signals surfaced up front.
            </p>
          </div>

          <div class="metrics-grid">
            <article class="metric-card">
              <span>Active streams</span>
              <strong>5</strong>
              <small>All visible to every user</small>
            </article>
            <article class="metric-card">
              <span>Current status mix</span>
              <strong>2 steady, 2 watch, 1 risk</strong>
              <small>Snapshot maintained by administrators</small>
            </article>
            <article class="metric-card">
              <span>Operating model</span>
              <strong>View only</strong>
              <small>Placeholders reserved for comments and auth</small>
            </article>
          </div>

          <div class="summary-grid">${n}</div>
        </section>

        ${o}

        <section class="shared-resources" id="shared-resources">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Shared resources</p>
              <h2>Reusable project materials</h2>
            </div>
            <p class="section-summary">
              A small shared library for cross-stream documentation, templates, and archived reference material.
            </p>
          </div>

          <div class="resources-layout">
            <article class="content-card">
              <h3>Library contents</h3>
              <ul class="bullet-list">
                ${h.map(e=>`<li>${e}</li>`).join("")}
              </ul>
            </article>

            <article class="content-card placeholder-card">
              <h3>Future expansion</h3>
              <p>Reserved for announcements, comments, authenticated editing, file sync, and permissions in later versions.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  `}function l(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-")}function u(t){return URL.createObjectURL(new Blob([t],{type:"text/markdown"}))}function v(t){return[18,32,46,58,72,84,96].map(n=>`<span style="height: ${Math.min(100,Math.max(28,t>=n?n:n-24))}%"></span>`).join("")}const g=document.querySelector("#app");m(g);
//# sourceMappingURL=index-RUZUt0xy.js.map
