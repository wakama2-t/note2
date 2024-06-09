const N = 40;
let hako = Array(N);

for (let i = 0; i < N; i++) {
    hako[i] = document.getElementById('hakotama'+i);
    hako[i].addEventListener('click', () => {
        if (hako[i].value == 0) {
            hako[i].style.backgroundColor = 'black';
            hako[i].value=1;
        } else {
            hako[i].style.backgroundColor = 'white';
            hako[i].value = 0;
        }
    }, false);
}


const next_button = document.getElementById("next");
const prev_button = document.getElementById("prev");
let hakotama = Array(N);
let j, k;

next_button.addEventListener('click', () => { 
    let k = 1;
    for (let i = 0; i < N; i++){
        k *= hako[i].value;
    }
    if (k == 1) {
        return;
    } else {
        next_step();
        update_hako();
    }
}, false)

prev_button.addEventListener('click', () => { 
    let a = 1;
    for (let i = 0; i < N; i++){
        a *= hako[i].value;
    }
    if (a == 1) {
        return;
    } else {
        prev_step();
        update_hako();
    }
}, false)

function next_step() {
    for (let i = 0; i < N; i++){
        if (hako[i].value == 1) {
            hakotama[i] = 1;
        } else {
            hakotama[i] = 0;
        }
    }
    let s = 0;
    if (hakotama[0] * hakotama[N - 1] == 1) {
        s = 1;
        while (hakotama[N - s - 1] == 1){
            s++;
        }
    }
    for (let i = 0; i < N; i++){
        if (i - s < 0) {
            k = i - s + N;
        } else {
            k = i - s;
        }
        if (hako[k].value == 1) {
            j = (k + 1) % N;
            while (hakotama[j] == 1) {
                j = (j + 1) % N;
            }
            hakotama[k] = 0;
            hakotama[j] = 1;
        }
    }
}

function prev_step() {
    for (let i = 0; i < N; i++){
        if (hako[i].value == 1) {
            hakotama[i] = 1;
        } else {
            hakotama[i] = 0;
        }
    }
    let s = 0;
    if (hakotama[0] * hakotama[N - 1] == 1) {
        s = 1;
        while (hakotama[s] == 1){
            s++;
        }
    }
    for (let i = N - 1; i >= 0; i--){
        k = (i + s) % N;
        if (hako[k].value == 1) {
            j = (k - 1);
            if (j < 0) { j += N; }
            while (hakotama[j] == 1) {
                j = (j - 1) % N;
                if (j < 0) { j += N; }
            }
            hakotama[k] = 0;
            hakotama[j] = 1;
        }
    }
}

function update_hako() {
    for (let i = 0; i < N; i++){
        hako[i].value = hakotama[i];
        if (hakotama[i] == 1) {
            hako[i].style.backgroundColor = "black";
        } else {
            hako[i].style.backgroundColor = "white";
        }
    }
}
