function eraseAll() {
    const failed = document.getElementById('failed');
    failed.style.display = 'none';
    const success = document.getElementById('success');
    success.style.display = 'none';
}
eraseAll();

const genBtn = document.getElementById('genBtn').addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const genInput = document.getElementById('genInput');
    genInput.value = randomNum;
    eraseAll();
    const pinNumber = document.getElementById('pinNumber');
    pinNumber.value = '';
})

const buttons = document.querySelectorAll('.button');

function butttonClick() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(){
            const pinNumber = document.getElementById('pinNumber');
            const newPinNumber = pinNumber.value;
            pinNumber.value = newPinNumber + buttons[i].innerHTML.trim();
        })
    }
}
butttonClick();


function actionMsg() {
    const actionMsg = document.getElementById('actionMsg');
    const actionNum = document.getElementById('actionNum');
    let actionNumValue = parseInt(actionNum.innerHTML);
    if (actionNumValue > 1){
        actionNumValue--;
        actionNum.innerHTML = actionNumValue;
        
        console.log(actionMsg.innerHTML);
        console.log(actionNum.innerHTML);
    }else{
        document.getElementById('submitBtn').disabled = true;
        actionMsg.innerHTML = 'No more try left';
    }
}

const submitBtn = document.getElementById('submitBtn').addEventListener('click', function(){
    const pinNumber = document.getElementById('pinNumber');
    const pinNumberValue = parseInt(pinNumber.value);
    const genInput = document.getElementById('genInput');
    const genInputValue = parseInt(genInput.value);

    if (pinNumberValue === genInputValue) {
        const success = document.getElementById('success');
        success.style.display = 'block';
        const actionMsg = document.getElementById('actionMsg');
        actionMsg.style.display = 'none';
    }else{
        const failed = document.getElementById('failed');
        failed.style.display = 'block';
        actionMsg();
    }
})

const clearBtn = document.getElementById('clearBtn').addEventListener('click', function(){
    const pinNumber = document.getElementById('pinNumber');
    const pinNumberValue = parseInt(pinNumber.value);
    const genInput = document.getElementById('genInput');
    const genInputValue = parseInt(genInput.value);
    const actionNum = document.getElementById('actionNum');

    if (pinNumberValue === genInputValue) {
        const actionMsg = document.getElementById('actionMsg');
        actionMsg.style.display = 'block';
        eraseAll();
        pinNumber.value = '';
        genInput.value = '';
        actionNum.innerHTML = 3;
    }else{
        eraseAll();
        pinNumber.value = '';
    }
});

document.getElementById('backBtn').addEventListener('click', function () {
    const pinNumber = document.getElementById('pinNumber');
    const newPinNumber = pinNumber.value;

    if (newPinNumber.length > 0) {
        pinNumber.value = newPinNumber.slice(0, -1);
    } else {
        console.log('No more value left');
    }
});
