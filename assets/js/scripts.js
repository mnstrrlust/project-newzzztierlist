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

    const namingToggleButton = document.getElementById("tierNamingToggle");
    if (namingToggleButton) {
        namingToggleButton.addEventListener("click", () => {
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

            namingToggleButton.textContent = usingAlt
                ? "Use regular naming"
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
    // Format any <time class="local-date" datetime="YYYY-MM-DD"> to user's locale
    const localDates = document.querySelectorAll('.local-date[datetime]');
    localDates.forEach(el => {
        const iso = el.getAttribute('datetime');
        const m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(iso || '');
        if (!m) return;
        const year = Number(m[1]);
        const month = Number(m[2]);
        const day = Number(m[3]);
        const d = new Date(year, month - 1, day); // local date to avoid TZ shifts
        const preferredLocale = (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language) || 'en-GB';
        el.textContent = d.toLocaleDateString(preferredLocale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    });
});