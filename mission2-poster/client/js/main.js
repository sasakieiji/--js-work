
/* 
css에 각 요소별로 css추가해서 변경하게 할수 있음 li + is-active 

하지만 만약 요소가 많아지거나 추가되면 각 요소별 css 작성하는게 힘들어짐 

사용자 입력 정보를 데이터 베이스에 저장 한후 이를 불러와서 적용하는 방법으로 하는 것이 편함


0. 필요한 문서 요소 불러오기


1. 클릭 이벤트 활성화
1-1. 클릭시 원하는 요소가 선택되는지 메시지를 출력하도록 하여 확인
1-2. 



2. nav 클릭시 배경 색상 변경
2-2데이터베이스에서 색정보 가져와서 화면에 업데이트


3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

추가
1. 상태관리하기
2. 이벤트 위임을 생각해보자


//느낀점

요소를 가져올때 data속성도 참고하여 가져오는 법을 알게 되었다
->'li[data-index="1"]'

textContent이용시 요소를 불러올때 .textContent로 불러오면 변수에  textContent값이 저장된다()
->HTML의 내용을 변경하기 위해선 요소를 불러온후 .content의 형식으로 작성해야 HTML의 요소가 바뀐다.
(let textElement = document.querySelector('h1.nickName').textContent / textElement = '바꿀내용' (x)
 let textElement = document.querySelector('h1.nickName') /  textElement.textContent = '바꿀내용' (O))

배경에 그라디언트 넣는것이 생각보다 어려웠다
->bodyElement.style.backgroundImage = `linear-gradient(to bottom,${data[0].color[0]},${data[0].color[1]})`;

이벤트리스너를 줄이는 방법을 찾고 싶다

이벤트 위임 설계를 한번 해보고 싶다.

*/

/* 요소가져오기 */
let bodyElement = document.querySelector('body');
let imgElement = document.querySelector('img');
let textElement = document.querySelector('h1.nickName');

let liIndex01 = document.querySelector('li[data-index="1"]');
let liIndex02 = document.querySelector('li[data-index="2"]');
let liIndex03 = document.querySelector('li[data-index="3"]');
let liIndex04 = document.querySelector('li[data-index="4"]');

let liIndex01Img = document.querySelector('li[data-index="1"] img')
let liIndex02Img = document.querySelector('li[data-index="2"] img')
let liIndex03Img = document.querySelector('li[data-index="3"] img')
let liIndex04Img = document.querySelector('li[data-index="4"] img')

/* 요소 테스트용 */
function consoleLog(){
    console.log(this)
}

/* 이미지 변경 */
function setImg(){
    if(this === liIndex01){
        imgElement.src = liIndex01Img.src
        imgElement.alt = data[0].alt
    }

    if(this === liIndex02){
        imgElement.src = liIndex02Img.src
        imgElement.alt = data[1].alt
    }

    if(this === liIndex03){
        imgElement.src = liIndex03Img.src
        imgElement.alt = data[2].alt
    }

    if(this === liIndex04){
        imgElement.src = liIndex04Img.src
        imgElement.alt = data[3].alt
    }
}

/* 텍스트 변경 */
function setText(){
    if(this === liIndex01){
        textElement.textContent = data[0].name
    }

    if(this === liIndex02){
        textElement.textContent = data[1].name
    }

    if(this === liIndex03){
        textElement.textContent = data[2].name
    }

    if(this === liIndex04){
        textElement.textContent = data[3].name
    }
}

/* 테두리 변경 */
function setClass(){

    liIndex01.className = ''
    liIndex02.className = ''
    liIndex03.className = ''
    liIndex04.className = ''

    this.className = 'is-active'

}

/* 배경 변경 */
function setBackGroundColor(){

    if(this === liIndex01){
        bodyElement.style.backgroundImage = `linear-gradient(to bottom,${data[0].color[0]},${data[0].color[1]})`;
    }

    if(this === liIndex02){
        bodyElement.style.backgroundImage = `linear-gradient(to bottom,${data[1].color[0]},${data[1].color[1]})`;
    }

    if(this === liIndex03){
        bodyElement.style.backgroundImage = `linear-gradient(to bottom,${data[2].color[0]},${data[2].color[1]})`;
    }

    if(this === liIndex04){
        bodyElement.style.backgroundImage = `linear-gradient(to bottom,${data[3].color[0]},${data[3].color[1]})`;
    }

}


/* 이벤트 리스너 */
liIndex01.addEventListener('click',  setImg);
liIndex02.addEventListener('click',  setImg);
liIndex03.addEventListener('click',  setImg);
liIndex04.addEventListener('click',  setImg);

liIndex01.addEventListener('click',  setText);
liIndex02.addEventListener('click',  setText);
liIndex03.addEventListener('click',  setText);
liIndex04.addEventListener('click',  setText);

liIndex01.addEventListener('click',  setClass);
liIndex02.addEventListener('click',  setClass);
liIndex03.addEventListener('click',  setClass);
liIndex04.addEventListener('click',  setClass);

liIndex01.addEventListener('click',  setBackGroundColor);
liIndex02.addEventListener('click',  setBackGroundColor);
liIndex03.addEventListener('click',  setBackGroundColor);
liIndex04.addEventListener('click',  setBackGroundColor);










