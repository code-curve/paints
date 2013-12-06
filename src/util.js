var util = {
    pad: function(num, len) {
        while(num.length < len) {
            num = "0" + num;
        }
        return num;
    }  
};