document.body.innerHTML = document.body.innerHTML.replace(
    /\bPartner\b/g,
    '<span class="partner-tag">Partner</span>',
);
document.body.innerHTML = document.body.innerHTML.replace(
    /\bHP\b/g,
    '<span class="hp-tag">HP</span>'
);
document.body.innerHTML = document.body.innerHTML.replace(
    /\bAftershock\b/g,
    '<span class="aftershock-tag">Aftershock</span>'
);
document.body.innerHTML = document.body.innerHTML.replace(
    /\bEXPERT\b/g,
    '<span class="expert-tag">EXPERT<span class="upward">»</span></span>'
);
document.body.innerHTML = document.body.innerHTML.replace(
    /\bBuff\b/g,
    '<span class="hp-tag">Buff</span>'
);
document.body.innerHTML = document.body.innerHTML.replace(
    /\bShield\b/g,
    '<span class="hp-tag">Shield</span>'
);