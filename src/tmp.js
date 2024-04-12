
var bits_buff = Array();
var prog_memory = [];
var prog_point = 0;
var acm_ = 0;

let data_grafic = document.querySelectorAll(".bit-cell");
let data_memory = Array(16);

var bits_line = 0;
var mnom_line = 0;


function fc_1(id) {
    let img = document.getElementById(id);
    let snd = document.getElementById('snd');
    
    
    let bits_out = document.querySelectorAll(".binary-line");
    let mnom_out = document.querySelectorAll(".mnemo-line");
    
    img.src = "res/img_2.png";
    snd.play();

    setTimeout(()=>{
        img.src = "res/img_1.png";
    },100);
    
    if (bits_buff.length == 8) {
    	
    	if ( prog_point <= 28 ) {
            prog_memory[prog_point] = bits_buff;
            prog_point += 1;
        } else {
        	prog_point = 0;
            prog_memory[prog_point] = bits_buff;
        }
        
        let t = null;
        
        try {
            t = mnomios[`_${bits_buff.join("")}`]();
        }catch(e){};

        
        if (t == null ) {
            if (bits_buff.join('') != "00000000" ) {
                let m = `<span style='color: blue'>${parseInt(bits_buff.join("").substr(0,4),2).toString(16)}</span>`;
                mnom_out[mnom_line].innerHTML += m;
            }else {
                let m = `<span style='color: gray; font-weight: bolder'>:label</span>`;
                mnom_out[mnom_line].innerHTML = m;
            }
            mnom_line += 1;
        } else {
           mnom_out[mnom_line].innerHTML = t;
        }
        
        bits_buff = Array();
        bits_line += 1;
    }
    
    if ( id == "wire-1" ) bits_buff.push(0);
    if ( id == "wire-2" ) bits_buff.push(1);
    
    bits_out[bits_line].innerText = bits_buff.join('');
}


const instructions = {
    "1111": (addr) =>{acm_  = data_memory[addr]},
    "0101": (addr) =>{acm_ += data_memory[addr]},
    "1001": (addr) =>{acm_ = addr},
    
    "1010": (addr) => {
        data_grafic[addr].innerText = acm_;
        data_memory[addr] = acm_;
    },

    "1100": (addr) =>{
        data_memory[addr] = ~ data_memory[addr];
		data_memo[addr].innerText = data_memory[addr];
    },

    "1110": (addr) => {return addr},
    "1011": (addr) => {return ( acm_ == 0 ) ? addr : null},
    "1101": (addr) => {return ( acm_ <  0 ) ? addr : null}
}

function fc_2() {
    if ( prog_memory.length > 0 ) {
        for (let x=0; x < prog_memory.length; x++) {
            let lbits = parseInt(prog_memory[x].join('').substr(0,4),2);  // values and adress
            let rbits = prog_memory[x].join('').substr(4,4);              // instructions
		}
		
		alert("codigo terminado: acumulador: "+acm_);
		return;
    }
    alert("Pouco código na memória principal !!");
}


function fc_3() { window.location.reload();}