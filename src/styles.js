

const mnomios = {
    "1010": (x) => { return `<span style='color: #6ea9c4; font-weight: 500;'>sta <i style='color:#000'>#</i><span style='color: #d96a29; font-weight: 400;'>${x}</span></span>&nbsp;&nbsp;`;},
    "1111": (x) => { return `<span style='color: #6ea9c4; font-weight: 500;'>lda <i style='color:#000'>#</i><span style='color: #d96a29; font-weight: 400;'>${x}</span></span>&nbsp;&nbsp;`;},
    "0101": (x) => { return `<span style='color: #6ea9c4; font-weight: 500;'>sum <i style='color:#000'>#</i><span style='color: #d96a29; font-weight: 400;'>${x}</span></span>&nbsp;&nbsp;`;},
    "1110": (x) => { return `<span style='color: #6ea9c4; font-weight: 500;'>jmp <i style='color:#000'>#</i><span style='color: #d96a29; font-weight: 400;'>${x}</span></span>&nbsp;&nbsp;`;},
    "1011": (x) => { return `<span style='color: #6ea9c4; font-weight: 500;'>jmz <i style='color:#000'>#</i><span style='color: #d96a29; font-weight: 400;'>${x}</span></span>&nbsp;&nbsp`;},
    "1101": (x) => { return `<span style='color: #6ea9c4; font-weight: 500;'>jmn <i style='color:#000'>#</i><span style='color: #d96a29; font-weight: 400;'>${x}</span></span>&nbsp;&nbsp;`;},
    "1001": (x) => { return `<span style='color: #6ea9c4; font-weight: 500;'>set <i style='color:#000'>#</i><span style='color: #d96a29; font-weight: 400;'>${x}</span></span>&nbsp;&nbsp;`;},
    "1100": (x) => { return `<span style='color: #6ea9c4; font-weight: 500;'>not <i style='color:#000'>#</i><span style='color: #d96a29; font-weight: 400;'>${x}</span></span>&nbsp;&nbsp;`;},
    "erro": ( ) => { return `<span style='color: #5e5e5e; font-weight: 500';>opcode invalido !!</span>&nbsp;&nbsp;`;}
}
