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
    button.addEventListener("click", () => {
        const cells = document.querySelectorAll(".tier-cell");
        cells.forEach(cell => {
            const current = cell.textContent.trim();
            if (!usingAlt && tierNameMapping[current]) {
                cell.textContent = tierNameMapping[current];
            } else if (usingAlt && reverseMapping[current]) {
                cell.textContent = reverseMapping[current];
            }
        });
        usingAlt = !usingAlt;

        if (usingAlt) {
            button.textContent = "Use normal tier naming";
        } else {
            button.textContent = "Use Prydwen tier naming";
        }
    });
});