document.addEventListener("DOMContentLoaded", () => {
    const tierNameMapping = {
        "SS+": "T0",
        "SS": "T0.5",
        "S+": "T1",
        "S": "T1.5",
        "A": "T2",
        "B": "T3",
        "C": "T4",
        "F": "T5"
    };

    // Reverse mapping for toggling back
    const reverseMapping = Object.fromEntries(
        Object.entries(tierNameMapping).map(([k, v]) => [v, k])
    );

    let usingAlt = false;

    const button = document.getElementById("tierNamingToggle");
    if (button) {
        button.addEventListener("click", () => {
            const cells = document.querySelectorAll(".tier-label");
            cells.forEach(cell => {
                const current = cell.textContent.trim();
                if (!usingAlt && tierNameMapping[current]) {
                    cell.textContent = tierNameMapping[current];
                } else if (usingAlt && reverseMapping[current]) {
                    cell.textContent = reverseMapping[current];
                }
            });
            usingAlt = !usingAlt;

            button.textContent = usingAlt
                ? "Use regular tier naming"
                : "Use T0, T0.5, etc. naming";
        });
    }

    const roleLabels = [
        { selector: ".dps-div", className: "dps", text: "Primary DPS" },
        { selector: ".subdps-div", className: "subdps", text: "Secondary DPS" },
        { selector: ".support-div", className: "support", text: "Support" },
        { selector: ".stun-div", className: "stun", text: "Stun" }
    ];

    function prependRoleLabel(container, className, text) {
        if (container.querySelector(`.role-label.${className}`)) return;
        const label = document.createElement("span");
        label.classList.add("role-label", className);
        label.textContent = text;
        container.prepend(label);
    }

    roleLabels.forEach(({ selector, className, text }) => {
        document.querySelectorAll(selector).forEach(div => {
            prependRoleLabel(div, className, text);
        });
    });
});