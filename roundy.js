const roundyabout = document.getElementById("roundyabout");

const textabout = "ABOUT•ABOUT•ABOUT•".split("");
{
    const step = 100 / textabout.length;
    const L = textabout.length
    textabout.map((c, idx) => {
        const r = 40;
        var s = 2 * Math.PI / L;
        var f = s * (idx);
        const x = r * Math.sin(f);
        const y = -r * Math.cos(f);

        const n = document.createElement("div");
        n.className = "letter";
        n.style = `
	transform:
	translate(${x}%,${y}%)
	scale(${0.015 * step},${0.015 * step});
	`;
        const nn = document.createElement("div");
        nn.style = `
transform: 
  rotateZ(${idx * 360 / L}deg);
font-weight: 900;
	`;
        nn.innerText = textabout[idx];
        n.appendChild(nn);

        roundyabout.appendChild(n);
    });
}

const roundyworks = document.getElementById("roundyworks");

const textworks = "WORKS•WORKS•WORKS•".split("");

{
    const step2 = 100 / textworks.length;
    const L = textworks.length
    textworks.map((c, idx) => {
        const r = 40;
        var s = 2 * Math.PI / L;
        var f = s * (idx);
        const x = r * Math.sin(f);
        const y = -r * Math.cos(f);

        const n = document.createElement("div");
        n.className = "letter";
        n.style = `
        transform:
        translate(${x}%,${y}%)
        scale(${0.015 * step2},${0.015 * step2});
        `;
        const nn = document.createElement("div");
        nn.style = `
    transform: 
      rotateZ(${idx * 360 / L}deg);
    font-weight: 600;
        `;
        nn.innerText = textworks[idx];
        n.appendChild(nn);

        roundyworks.appendChild(n);
    });
}


const roundycontact = document.getElementById("roundycontact");

const textcontact = "CONTACT•CONTACT•CONTACT•".split("");

{
    const step2 = 100 / textcontact.length;
    const L = textcontact.length
    textcontact.map((c, idx) => {
        const r = 40;
        var s = 2 * Math.PI / L;
        var f = s * (idx);
        const x = r * Math.sin(f);
        const y = -r * Math.cos(f);

        const n = document.createElement("div");
        n.className = "letter";
        n.style = `
        transform:
        translate(${x}%,${y}%)
        scale(${0.015 * step2},${0.015 * step2});
        `;
        const nn = document.createElement("div");
        nn.style = `
    transform: 
      rotateZ(${idx * 360 / L}deg);
    font-weight: 900;
        `;
        nn.innerText = textcontact[idx];
        n.appendChild(nn);

        roundycontact.appendChild(n);
    });
}