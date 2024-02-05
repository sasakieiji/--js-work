//상태관리 변수
let isRegChecked = {
    id: false,
    pw: false
}


//규식이형 소환해서 아이디와 비밀번호 올바른 조건으로 입력되었는지 확인하고 결과값을 불린값으로 반환하는 함수

function emailReg(text){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    return re.test(String(text).toLowerCase())
  }
  
  function pwReg(text){
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  }
  

//아이디가 조건에 맞게 작성이 되었는가에 대한 정보 제공 기능

//dom요소를 가져오기 위함
const idField = document.querySelector( '#userEmail');

function idRegCheck(){

    if(emailReg(idField.value)){
/*         console.log(idField.value)
        console.log('success') */
        isRegChecked.id = true
/*         console.log(isRegChecked.id) */
    }else{
/*         console.log(idField.value)
        console.log('fail') */
        isRegChecked.id = false
/*         console.log(isRegChecked.id) */

    }
}

function idRegError(){
    if(isRegChecked.id){
        //com중c만적어도 true로 판별
        idField.classList.remove('is--invalid')
    }else{
        idField.classList.add('is--invalid')
    }
}


idField.addEventListener('input',idRegCheck);
idField.addEventListener('input',idRegError);


//비밀번호가 조건에 맞게 작성이 되었는가에 대한 정보 제공 기능
const pwField = document.querySelector( '#userPassword');

function pwRegCheck(){

    if(pwReg(pwField.value)){
        console.log(pwField.value)
        console.log('success')
        isRegChecked.pw = true

    }else{
        console.log(pwField.value)
        console.log('fail')
        isRegChecked.pw = false

    }
}

function pwRegError(){
    if(isRegChecked.pw){
        pwField.classList.remove('is--invalid');
    }else{
        pwField.classList.add('is--invalid');
    }
}

pwField.addEventListener('input',pwRegCheck);
pwField.addEventListener('input',pwRegError);


//아이디, 비밀번호가 일치시 로그인되는 기능

const user = {
    id:'asd@naver.com',
    pw:'spdlqj123!@'
}

const btn = document.querySelector('.btn-login');

function logIn(e){
    //submit 버튼의 기본 기능으로 인해 원치않는 동작을 하는것을 예방
    e.preventDefault();

    if(idRegCheck.id&&idRegCheck.pw&&user.id===idField.value&&user.pw===pwField.value){
        location.href = 'welcome.html'
    }else{
        document.querySelector('.user-email-input').focus();
        idField.classList.add('is--invalid')
        pwField.classList.add('is--invalid')
        alert(`아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.`);
    }
}

btn.addEventListener('click',logIn);



/* function loigIn(){
    if(emailReg(idField.value)&&pwReg(pwField.value)&&user.id===idField.value&&user.pw===pwField.value){
        location.href = 'welcome.html'
    }
} */