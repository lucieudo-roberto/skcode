


let wire0 = document.getElementById('wire-0')
let wire1 = document.getElementById('wire-1')
let sound = document.getElementById('soud-1')

let data_grafic = document.querySelectorAll(".dt-cell");
let stru_grafic = document.querySelectorAll(".nm-line");
let bina_grafic = document.querySelectorAll(".bn-line");

var acml_values = 0;  // acumulador
let data_memory = Array(16).fill(0); 

let stru_memory = Array(28).fill(0);
let buff_binary = [];
let buff_clines = 0; // buff code lines

const instructions = {
    "1111": (addr)=>{acml_values  = data_memory[addr]},
    "0101": (addr)=>{acml_values += data_memory[addr]},
    "1001": (addr)=>{acml_values = addr},
    
    "1010": (addr)=> {
        data_grafic[addr].innerText = acml_values;
        data_memory[addr] = acml_values;
    },

    "1100": (addr)=>{
        data_memory[addr] = ~ data_memory[addr];
		data_grafic[addr].innerText = data_memory[addr];
    },

    "1110": (addr)=> {return addr},
    "1011": (addr)=> {return ( acml_values == 0 ) ? addr : null},
    "1101": (addr)=> {return ( acml_values <  0 ) ? addr : null}
}

function fc_1(wire_side) {
    if ( buff_binary.length < 8 ) {
        let bit = wire_side == 'b1' ? 1 : 0;
         buff_binary.push(bit)
         bina_grafic[buff_clines].innerText = buff_binary.join('');
    }

    switch(wire_side) {
        case "b0":
            wire0.src = 'res/img_2.png';
            setTimeout(()=>{ wire0.src = 'res/img_1.png'},100);
            sound.play()
        break;
        case "b1":
            wire1.src = 'res/img_2.png';
            setTimeout(()=>{ wire1.src = 'res/img_1.png';},100);
            sound.play()
        break;
    }

    if (buff_binary.length == 8 ) {
        stru_memory[buff_clines] = buff_binary.join('');
        buff_clines += 1;
        
        try {
            let lbits = parseInt(buff_binary.join('').substr(0,4),2);  
            let rbits = buff_binary.join('').substr(4,4);    
    
            let strfmtd = mnomios[rbits](lbits);
            stru_grafic[buff_clines].innerHTML = strfmtd;
        
        }catch(e){
            stru_grafic[buff_clines].innerHTML = mnomios['erro']();
        };

        buff_binary = [];
        if ( buff_clines == 27 ) buff_clines = 0;
    }
}

function fc_2() {
    document.getElementById('runing').style.color = 'green';
    
    let callbacksN = 0; // limite máximo de chamadas.
    let callbacksL = 300; // modificar esse valor, pode travar o navegador com uso errado do jmp

    acml_values = 0;

    if ( buff_clines > 0 ) {
        for (let x=0; x < buff_clines; x++) {
            let lbits = stru_memory[x].substr(0,4);  // values and adress
            let rbits = stru_memory[x].substr(4,4);  // instructions
            
            try {
                let state = instructions[rbits](parseInt(lbits,2));
                if ( state != undefined ) {
                    if ( state < 0 || state > buff_clines ) {
                        alert(`line: ${buff_clines+1}, invalid jump adress, min-max: < 0-${buff_clines} >`);
                        break;
                    }else
                        x = ( state == undefined ) ? x : state;
                }            
            }catch(e) {}
            document.getElementById('acm').innerText = `acm: ${acml_values} | pgc: ${callbacksN}`;
            if ( callbacksN >= callbacksL ) break;
            callbacksN +=1;
	    }
    }

    document.getElementById('acm').innerText = `acm: ${acml_values}`;
    document.getElementById('runing').style.color = 'gray';
}

function fc_3() { window.location.reload();}
