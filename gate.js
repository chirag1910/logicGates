const data = {
    and: {
        title: "AND",
        description: `The AND gate is so named because, if 0 is called "false" and 1 is called "true," the gate acts in the same way as the logical "and" operator. The following illustration and table show the circuit symbol and logic combinations for an AND gate. (In the symbol, the input terminals are at left and the output terminal is at right.) The output is "true" when both inputs are "true." Otherwise, the output is "false." In other words, the output is 1 only when both inputs one AND two are 1.`,
    },
    or: {
        title: "OR",
        description: `The OR gate gets its name from the fact that it behaves after the fashion of the logical inclusive "or." The output is "true" if either or both of the inputs are "true." If both inputs are "false," then the output is "false." In other words, for the output to be 1, at least input one OR two must be 1.`,
    },
    not: {
        title: "NOT",
        description: `A logical inverter, sometimes called a NOT gate to differentiate it from other types of electronic inverter devices, has only one input. It reverses the logic state. If the input is 1, then the output is 0. If the input is 0, then the output is 1.`,
    },
    nand: {
        title: "NAND",
        description: `The NAND gate operates as an AND gate followed by a NOT gate. It acts in the manner of the logical operation "and" followed by negation. The output is "false" if both inputs are "true." Otherwise, the output is "true."`,
    },
    nor: {
        title: "NOR",
        description: `The NOR gate is a combination OR gate followed by an inverter. Its output is "true" if both inputs are "false." Otherwise, the output is "false."`,
    },
    xor: {
        title: "XOR",
        description: `The XOR ( exclusive-OR ) gate acts in the same way as the logical "either/or." The output is "true" if either, but not both, of the inputs are "true." The output is "false" if both inputs are "false" or if both inputs are "true." Another way of looking at this circuit is to observe that the output is 1 if the inputs are different, but 0 if the inputs are the same.`,
    },
    xnor: {
        title: "XNOR",
        description: `The XNOR (exclusive-NOR) gate is a combination XOR gate followed by an inverter. Its output is "true" if the inputs are the same, and "false" if the inputs are different.`,
    },
};

const getOutput = (gate, a = false, b = false) => {
    a = Boolean(a);
    b = Boolean(b);

    switch (gate.toLowerCase()) {
        case "and":
            return a && b;

        case "or":
            return a || b;

        case "not":
            return !a;

        case "nand":
            return !(a && b);

        case "nor":
            return !(a || b);

        case "xor":
            return (a && !b) || (!a && b);

        case "xnor":
            return a === b;

        default:
            break;
    }
};

const setHero = () => {
    let heroTitle = document.getElementById("heroTitle");
    let heroDesc = document.getElementById("heroDesc");

    switch (gate.toLowerCase()) {
        case "and":
            heroTitle.innerText = `${data.and.title} Gate`;
            heroDesc.innerText = data.and.description;
            break;

        case "or":
            heroTitle.innerText = `${data.or.title} Gate`;
            heroDesc.innerText = data.or.description;
            break;

        case "not":
            heroTitle.innerText = `${data.not.title} Gate`;
            heroDesc.innerText = data.not.description;
            break;

        case "nand":
            heroTitle.innerText = `${data.nand.title} Gate`;
            heroDesc.innerText = data.nand.description;
            break;

        case "nor":
            heroTitle.innerText = `${data.nor.title} Gate`;
            heroDesc.innerText = data.nor.description;
            break;

        case "xor":
            heroTitle.innerText = `${data.xor.title} Gate`;
            heroDesc.innerText = data.xor.description;
            break;

        case "xnor":
            heroTitle.innerText = `${data.xnor.title} Gate`;
            heroDesc.innerText = data.xnor.description;
            break;

        default:
            break;
    }
};

const setImage = () => {
    var imageSrc = "";

    switch (gate.toLowerCase()) {
        case "and":
            imageSrc = "./assets/and.png";
            break;

        case "or":
            imageSrc = "./assets/or.png";
            break;

        case "not":
            imageSrc = "./assets/not.png";
            break;

        case "nand":
            imageSrc = "./assets/nand.png";
            break;

        case "nor":
            imageSrc = "./assets/nor.png";
            break;

        case "xor":
            imageSrc = "./assets/xor.png";
            break;

        case "xnor":
            imageSrc = "./assets/xnor.png";
            break;

        default:
            break;
    }

    document.querySelectorAll(".gateImg").forEach((image) => {
        if (imageSrc) {
            image.src = imageSrc;
        }
    });
};

const setVis = () => {
    let vin0 = document.getElementById("vin0").querySelector("input");
    let vin1 = document.getElementById("vin1").querySelector("input");

    const setOutput = () => {
        let outElement = document
            .getElementById("indicator")
            .querySelector("input");
        outElement.checked = getOutput(gate, vin0.checked, vin1.checked);
    };
    setOutput();

    vin0.addEventListener("change", () => {
        setOutput();
    });
    vin1.addEventListener("change", () => {
        setOutput();
    });

    if (gate.toLowerCase() === "not") {
        document.getElementById("vin0").classList.add("lone");
        document.getElementById("vin1").classList.add("hide");
    }
};

const setTT = () => {
    let out0 = document.getElementById("out0");
    let out1 = document.getElementById("out1");
    let out2 = document.getElementById("out2");
    let out3 = document.getElementById("out3");

    out0.innerText = +getOutput(gate, 0, 0);
    out1.innerText = +getOutput(gate, 0, 1);
    out2.innerText = +getOutput(gate, 1, 0);
    out3.innerText = +getOutput(gate, 1, 1);

    if (gate.toLowerCase() === "not") {
        document.querySelectorAll(".in1").forEach((element) => {
            element.innerText = "-";
        });
    }
};

const init = () => {
    document.title = `${gate.toUpperCase()} | Logic Gate`;
    setHero();
    setImage();
    setVis();
    setTT();
};

// driver
const urlParams = new URLSearchParams(window.location.search);
const gate = urlParams.get("g");

if (
    !["and", "or", "not", "nand", "nor", "xor", "xnor"].includes(
        gate.toLowerCase()
    )
) {
    window.location = "404.html";
} else {
    init();
}

// event handlers
document.getElementById("TTButton").addEventListener("click", () => {
    document.getElementById("TT").scrollIntoView();
});
document.getElementById("visButton").addEventListener("click", () => {
    document.getElementById("vis").scrollIntoView();
});
