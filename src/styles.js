var mnomios = {
    _00001010 : () => {
        return "<span style='color: red; font-weight: bolder;'>sta</span>&nbsp;&nbsp;";
    },
    
    _00001111: () => {
        return "<span style='color: red; font-weight: bolder;'>lda</span>&nbsp;&nbsp;";
    },
    
    _00000101: () => {
        return "<span style='color: red; font-weight: bolder;'>sum</span>&nbsp;&nbsp;";
    },
    
    _00001110: () => {
        return "<span style='color: red; font-weight: bolder;'>jmp</span>&nbsp;&nbsp;";
    },
    
    _00001011: () => {
        return "<span style='color: red; font-weight: bolder;'>jmz</span>&nbsp;&nbsp;";
    },
    
    _00001101: () => {
        return "<span style='color: red; font-weight: bolder;'>jmn</span>&nbsp;&nbsp;";
    },
    
    _00001001: () => {
        return "<span style='color: red; font-weight: bolder;'>set</span>&nbsp;&nbsp;";
    },
    
    _00001100: () => {
    	return "<span style='color: red; font-weight: bolder;'>not</span>&nbsp;&nbsp;";
    }
}
