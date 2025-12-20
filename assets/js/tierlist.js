document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/agent-info.json?nocache=" + Date.now())
        .then(response => response.json())
        .then(agents => {
            agents.forEach(agent => {
                const tierId = String(agent.tier || "")
                    .replaceAll("+", "plus")
                    .replace(/\s+/g, "");

                const roleId = String(agent.role || "")
                    .trim()
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, "");
                if (!tierId || !roleId) return;
                const containerId = `${tierId}-${roleId}`;
                const container = document.getElementById(containerId);
                if (!container) return;

                const agentDiv = document.createElement("div");
                agentDiv.className = "agent";

                const rankClass = agent.rank === "S" ? "s-rank" : "a-rank";
                const otherInfo = agent.other || "";

                const tags = agent.tags ? agent.tags.split(",").map(t => t.trim()) : [];
                const tagHTML = tags.map(tag => {
                    if (tag.includes("Heal") || tag.includes("Buff") || tag.includes("Shield")) return `<span class="hp-tag">${tag}</span>`;
                    if (tag.includes("Partner")) return `<span class="partner-tag">${tag}</span>`;
                    if (tag.includes("Aftershock")) return `<span class="aftershock-tag">${tag}</span>`;
                    if (tag.includes("EXPERT")) return `<span class="expert-tag">EXPERT<span class="upward">»</span></span>`;
                    return tag;
                }).join(",<br>");

                agentDiv.innerHTML = `
                    <div class="agent-img-container">
                        <a href="https://www.prydwen.gg/zenless/characters/${agent.name.toLowerCase()}" target="_blank">
                            <img class="${rankClass} main" src="${agent.image}" alt="${agent.name}">
                        </a>
                        <div class="overlay-text">${otherInfo}</div>
                        ${agent.watchlist ? `<img class="watchlist-icon" src="assets/other-sprites/watchlist.svg" alt="Watchlist">` : ''}
                        ${agent.tierdiff === "+" ? `<img class="positive-diff-icon" src="assets/other-sprites/up-arrow.svg" alt="Up">` : ''}
                        ${agent.tierdiff === "++" ? `<img class="positive-diff-icon" src="assets/other-sprites/up-arrow2.svg" alt="Up+">` : ''}
                        ${agent.tierdiff === "-" ? `<img class="negative-diff-icon" src="assets/other-sprites/down-arrow.svg" alt="Down">` : ''}
                        ${agent.tierdiff === "--" ? `<img class="negative-diff-icon" src="assets/other-sprites/down-arrow2.svg" alt="Down-">` : ''}
                    </div>
                    <div class="agent-tags">${tagHTML}</div>
                `; // Link to Prydwen temporarily
                container.appendChild(agentDiv);
            });
        });
});
