var util = {
    pad: function(num, len) {
        while(num.length < len) {
            num = "0" + num;
        }
        return num;
    },
    shuffle: function(arr) {
        var idx = arr.length, tmp, rand;

        while(0 !== idx) {
            rand = Math.floor(Math.random() * idx);
            idx -= 1;
            tmp = arr[idx];
            arr[idx] = arr[rand];
            arr[rand] = tmp;
        }

        return arr;
    }
};