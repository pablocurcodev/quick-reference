export function initApp(data) {
  let activecat = "all";

  const qInput = document.getElementById("q");
  const chipsEl = document.getElementById("chips");
  const out = document.getElementById("out");

  const cats = ["all", ...data.map((d) => d.cat)];

  function escapeHTML(str) {
    if (!str) return "";
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function highlight(text, q) {
    if (!q) return text;
    const re = new RegExp(
      `(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    return text.replace(re, "<mark>$1</mark>");
  }

  function renderChips() {
    chipsEl.innerHTML = cats
      .map(
        (c) => `
        <button 
          class="chip ${activecat === c ? "active" : ""}" 
          data-cat="${c}"
        >
          ${c}
        </button>
      `,
      )
      .join("");
  }

  function render() {
    const q = qInput.value.trim().toLowerCase();

    let html = "";
    let total = 0;

    data.forEach((sec) => {
      if (activecat !== "all" && sec.cat !== activecat) return;

      const rows = sec.cmds.filter((c) => {
        if (!q) return true;
        return (
          c.cmd.toLowerCase().includes(q) ||
          (c.desc || "").toLowerCase().includes(q) ||
          (c.example || "").toLowerCase().includes(q)
        );
      });

      if (!rows.length) return;

      total += rows.length;

      html += `<div class="section">
        <div class="section-title">${sec.cat}</div>`;

      rows.forEach((r) => {
        html += `<div class="cmd-row">
          <div class="cmd">
            ${highlight(escapeHTML(r.cmd), q)}
            ${r.warn ? '<span class="badge">caution</span>' : ""}
          </div>
          <div class="desc">${highlight(r.desc || "", q)}</div>
          <div class="example-col">${
            r.example ? highlight(r.example, q) : ""
          }</div>
        </div>`;
      });

      html += `</div>`;
    });

    if (!total) {
      html = `<div class="no-results">No matches for "${q}"</div>`;
    }

    out.innerHTML = html;

    renderChips(); // re-render chips to update active state
  }

  // EVENT DELEGATION (chips)
  chipsEl.addEventListener("click", (e) => {
    if (e.target.matches(".chip")) {
      activecat = e.target.dataset.cat;
      render();
    }
  });

  // SEARCH INPUT LISTENER
  qInput.addEventListener("input", render);

  // initial render
  render();
}
