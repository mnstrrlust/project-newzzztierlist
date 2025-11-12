document.addEventListener("DOMContentLoaded", () => {
    const roleMap = {
        "Primary DPS": "primary-dps",
        "Secondary DPS": "secondary-dps",
        "Support": "support",
        "Stun": "stun"
    };

    agents.forEach(agent => {
        // Normalize tier string for IDs
        const tierId = agent.tier.replace("+", "plus").replace(" ", "");
        const roleId = roleMap[agent.role];
        const containerId = `${tierId}-${roleId}`;
        const container = document.getElementById(containerId);
        if (!container) return;

        const agentDiv = document.createElement("div");
        agentDiv.className = "agent";

        const rawRank = agent.rank || "";
        const rankLetter = rawRank.trim().substring(0, 1).toUpperCase();
        const rankClass = rankLetter === "S" ? "s-rank" : "a-rank";

        const tags = agent.tags ? agent.tags.split(",").map(t => t.trim()) : [];
        const tagHTML = tags.map(tag => {
            if (tag.includes("Heal") || tag.includes("Buff") || tag.includes("Shield")) return `<span class="hp-tag">${tag}</span>`;
            if (tag.includes("Partner")) return `<span class="partner-tag">${tag}</span>`;
            if (tag.includes("Aftershock")) return `<span class="aftershock-tag">${tag}</span>`;
            if (tag.includes("EXPERT")) return `<span class="expert-tag">EXPERT<span class="upward">»</span></span>`;
            return tag;
        }).join(",<br>");

        agentDiv.innerHTML = `
        <img class="${rankClass}" src="${agent.image}" alt="${agent.name}">
        <div class="agent-tags">${tagHTML}</div>
    `;

        container.appendChild(agentDiv);
    });
});