
var bits_buff = Array();
var prog_memory = [];
var prog_point = 0;
var acm_ = 0;
var data_memory = Array(16);
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


function fc_2() {
	let data_memo = document.querySelectorAll(".bit-cell");
	let pos = 0;
	
    if ( prog_memory.length >= 2 ) {
		// loop principal 
		for (let x=0; x < prog_memory.length; x++) {
			switch(prog_memory[x].join('')) {
                case "00001010":
                    pos = parseInt(prog_memory[x+1].join('').substr(0,4),2);
                    data_memo[pos].innerText = acm_;
                    data_memory[pos] = acm_;
                    x+=1;
                break;
                
                case "00001111":
                    pos = parseInt(prog_memory[x+1].join('').substr(0,4),2);
                    acm_ = data_memory[pos]
                    x+=1;
                break;
                
                case "00000101":
                    pos = parseInt(prog_memory[x+1].join('').substr(0,4),2);
                    acm_ += data_memory[pos]
                    x+=1;
                break;
                
                case "00001001":
                    pos = parseInt(prog_memory[x+1].join('').substr(0,4),2);
                    acm_ = pos
                    x+=1;
                break;
                
                case "00001100":
                    pos = parseInt(prog_memory[x+1].join('').substr(0,4),2);
                    data_memory[pos] = ~ data_memory[pos];
		    data_memo[pos].innerText = data_memory[pos];
                    x+=1;
                break;
                
                case "00001110":
                    x = parseInt(prog_memory[x+1].join('').substr(0,4),2);
                break;
                
                case "00001011":
                    if ( acm_ == 0 ) {
                    	x = parseInt(prog_memory[x+1].join('').substr(0,4),2);
                    }else {
                    	x+=1;
                    }
                break;
                
                case "00001101":
                    if ( acm_ < 0 ) {
                    	x = parseInt(prog_memory[x+1].join('').substr(0,4),2);
                    }else {
                    	x+=1;
                    }
                break;
            }
		}
		
		alert("codigo terminado: acumulador: "+acm_);
		return;
    }
    
    alert("Pouco código na memória principal !!");
}

function fc_3() {
	window.location.reload();
}
