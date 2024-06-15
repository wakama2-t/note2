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
let hakotama = Array(2*N);

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
    let flag = 0; //右端→左端へ跨ぐ玉が存在するか
    let flag2 = 0;//玉の移動先が2Nを超えているかどうか(超えてたら玉を消す操作のみでよい)
    let j;
    for (let i = 0; i < N; i++){
        if (hako[i].value == 1) {
            hakotama[i] = 1;
            hakotama[i+N] = 1;
        } else {
            hakotama[i] = 0;
            hakotama[i+N] = 0;
        }
    }
    for (let i = 0; i < 2 * N; i++){
        if (i == N && flag == 0) {
            return;
        }
        if (hako[i%N].value == 1) {
            if (N == i + 1) {
                flag = 1;
            }
            j = (i + 1);
            while (hakotama[j] == 1) {
                j++;
                if (N == j) {
                    flag = 1;
                }
                if (j >= 2 * N) {
                    flag2 = 1;
                    break;
                }
            }
            hakotama[i] = 0;
            if (flag2 == 0) {
                hakotama[j] = 1;                
            }
        }
    }
    if (flag == 1) {
        for (let i = 0; i < N; i++){
            hakotama[i] = hakotama[i + N];
        }
    }
}

function prev_step() {
    let flag = 0; //右端→左端へ跨ぐ玉が存在するか
    let flag2 = 0;//玉の移動先が2Nを超えているかどうか(超えてたら玉を消す操作のみでよい)
    let j;
    for (let i = 0; i < N; i++){
        if (hako[i].value == 1) {
            hakotama[i] = 1;
            hakotama[i+N] = 1;
        } else {
            hakotama[i] = 0;
            hakotama[i+N] = 0;
        }
    }
    for (let i = 2 * N - 1; i >= 0; i--){
        if (i == N-1 && flag == 0) {
            break;
        }
        if (hako[i%N].value == 1) {
            if (N-1 == i - 1) {
                flag = 1;
            }
            j = (i - 1);
            while (hakotama[j] == 1) {
                j--;
                if (N-1 == j) {
                    flag = 1;
                }
                if (j < 0) {
                    flag2 = 1;
                    break;
                }
            }
            hakotama[i] = 0;
            if (flag2 == 0) {
                hakotama[j] = 1;                
            }
        }
    }
    if (flag == 0) {
        for (let i = 0; i < N; i++) {
            hakotama[i] = hakotama[i + N];
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
