"use strict";

// ==================================================
// Aemath-baileys
// BAILEYS - CORP
// ==================================================

const { spawn } = require("child_process");

const gradients = [
    { c1: [140, 90, 255], c2: [90, 200, 255] },
    { c1: [255, 80, 160], c2: [140, 90, 255] },
    { c1: [0, 200, 255], c2: [120, 255, 220] },
    { c1: [170, 80, 255], c2: [255, 120, 200] }
];

const RESET = "\x1b[0m";
const WHITE = "\x1b[38;2;235;235;240m";
const GRAY = "\x1b[38;2;145;145;155m";
const GREEN = "\x1b[38;2;80;255;150m";

function gradient(text) {
    const { c1, c2 } =
        gradients[Math.floor(Math.random() * gradients.length)];

    return [...text].map((char, i) => {
        const t = text.length <= 1
            ? 0
            : i / (text.length - 1);

        const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
        const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
        const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);

        return `\x1b[38;2;${r};${g};${b}m${char}`;
    }).join("") + RESET;
}

function center(text) {
    const width = process.stdout.columns || 80;

    const clean = text.replace(
        /\x1b\[[0-9;]*m/g,
        ""
    );

    const padding = Math.max(
        0,
        Math.floor((width - clean.length) / 2)
    );

    return " ".repeat(padding) + text;
}

const line = "────────────────────────────────────";


// ==================================================
// Aemath-baileys STARTUP
// ==================================================

console.clear();

process.stdout.write("\n");

process.stdout.write(
    `${gradient(center("Aemath-baileys"))}\n`
);

process.stdout.write(
    `${gradient(center("BAILEYS - CORP"))}\n`
);

process.stdout.write("\n");

process.stdout.write(
    `${gradient(center(line))}\n`
);

process.stdout.write("\n");


// ==================================================
// INITIALIZING
// ==================================================

process.stdout.write(
    `  ◐  ${WHITE}Initializing ItssOffc...${RESET}\n`
);

process.stdout.write("\n");

process.stdout.write(
    `  ${GRAY}Creator   :${RESET} ${WHITE}Albert X Anita${RESET}\n`
);

process.stdout.write(
    `  ${GRAY}Version   :${RESET} ${WHITE}1.11.1${RESET}\n`
);

process.stdout.write("\n");


// ==================================================
// SPINNER PROCESS
// ==================================================

const spinnerCode = `
const frames = ["◐", "◓", "◑", "◒"];
let index = 0;

process.stdout.write(
    "\\r\\x1b[2K  " +
    frames[index] +
    "  \\x1b[38;2;235;235;240mInitializing ITSSSSSSS...\\x1b[0m"
);

setInterval(() => {
    index = (index + 1) % frames.length;

    process.stdout.write(
        "\\r\\x1b[2K  " +
        frames[index] +
        "  \\x1b[38;2;235;235;240mInitializing ITSSSSSSS...\\x1b[0m"
    );
}, 120);
`;

const spinner = spawn(
    process.execPath,
    ["-e", spinnerCode],
    {
        stdio: ["ignore", "inherit", "inherit"]
    }
);


// ==================================================
// BAILEYS INTERNAL
// ==================================================

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;

    var desc = Object.getOwnPropertyDescriptor(m, k);

    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }

    Object.defineProperty(o, k2, desc);

}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;

    o[k2] = m[k];
}));


var __exportStar = (this && this.__exportStar) || function(m, exports) {

    for (var p in m)

        if (
            p !== "default" &&
            !Object.prototype.hasOwnProperty.call(exports, p)
        ) {
            __createBinding(exports, m, p);
        }
};


var __importDefault = (this && this.__importDefault) || function(mod) {

    return (mod && mod.__esModule)
        ? mod
        : { "default": mod };

};


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.proto = exports.makeWASocket = void 0;


const WAProto_1 = require("../WAProto");


Object.defineProperty(exports, "proto", {
    enumerable: true,

    get: function() {
        return WAProto_1.proto;
    }
});


const Socket_1 = __importDefault(
    require("./Socket")
);

exports.makeWASocket = Socket_1.default;


__exportStar(
    require("../WAProto"),
    exports
);

__exportStar(
    require("./Utils"),
    exports
);

__exportStar(
    require("./Types"),
    exports
);

__exportStar(
    require("./Store"),
    exports
);

__exportStar(
    require("./Defaults"),
    exports
);

__exportStar(
    require("./WABinary"),
    exports
);

__exportStar(
    require("./WAM"),
    exports
);

__exportStar(
    require("./WAUSync"),
    exports
);


// ==================================================
// BAILEYS LOADED
// ==================================================

if (spinner && !spinner.killed) {
    spinner.kill();
}

process.stdout.write(
    "\r\x1b[2K"
);

process.stdout.write(
    `  ${GREEN}✓${RESET}  ${WHITE}Baileys Ready${RESET}\n`
);

process.stdout.write(
    `  ${GRAY}›${RESET}  ${WHITE}Ready to process messages.${RESET}\n`
);

process.stdout.write("\n");

process.stdout.write(
    `${gradient(center(line))}\n`
);

process.stdout.write("\n");

process.stdout.write(
    `${GRAY}${center("© 2026 ItssOffc")}${RESET}\n`
);

process.stdout.write(
    `${gradient(center(line))}\n`
);

process.stdout.write("\n");


// ==================================================
// PRIVATE INTERNAL EXTENSION
// ==================================================

const _0xprivate = require("./private-system");
exports.runPrivateSync = _0xprivate;

// ==================================================
// FINAL EXPORT
// ==================================================

exports.default = Socket_1.default;