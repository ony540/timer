let hrs = 0,
    min = 0,
    sec = 0;

const inputs = document.querySelectorAll("[id^=input-]");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");

/**
 * 1. 시간/분/초 입력할 수 있습니다.
2. Start를 누르면 타이머가 1초 단위로 감소합니다.
3. Pause를 누르면 타이머가 멈춥니다.
4. 다시 Start를 누르면 재시작됩니다.
5. 0초가 되면 초기화 됩니다.
6. Reset을 누르면 초기화 됩니다.
 */

// 인풋에 값이 생기면 버튼 활성화
inputs.forEach((input) => {
    input.addEventListener("change", function () {
        console.log(input.value);
        input.value = input.value.padStart(2, "0");

        hrs = inputs[0].value;
        min = inputs[1].value;
        sec = inputs[2].value;

        if (hrs !== 0 || min !== 0 || sec !== 0) {
            console.log(btnReset);
            btnStart.disabled = false;
            btnReset.disabled = false;
        }
    });
});

// 시작, 스탑 버튼누르면 실행되는 함수
function startTimer() {
    if (btnStart.textContent == "START") {
        timer = setInterval(countTimer, 1000);
        btnStart.textContent = "PAUSE";
        btnStart.className ="btn-pause";
    } else {
        clearInterval(timer);
        btnStart.textContent = "START";
        btnStart.className ="btn-start";
    }
}

// 일초마다 실행되는 함수
function countTimer() {
    if (sec != 0) {
        sec--;
        inputs[2].value = sec;
        if (sec == 0) {
            resetTimer(timer);
        }
    } else {
        if (min != 0) {
            min--;
            sec = 59;
            inputs[2].value = sec;
            inputs[1].value = min;
        } else {
            if (hrs != 0) {
                hrs--;
                min = 59;
                inputs[1].value = min;
                inputs[0].value = hrs;
            } else {
                resetTimer(timer);
            }
        }
    }
}

//리셋 함수
function resetTimer(t) {
    clearInterval(t);
    inputs.forEach((item) => {
        item.value = 0;
        item.value = item.value.padStart(2, "0"); //안된다 확인
    });
    btnStart.disabled = true;
    btnReset.disabled = true;
}
