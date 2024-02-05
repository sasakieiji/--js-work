# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---

- [ ] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---

## ⛰️구현해야하는 기능

---

### ⛰️아이디, 비밀번호가 조건에 맞게 작성이 되었는가에 대한 정보 제공 기능

---

🚩
1. 인풋의 밸류값을 가져오는 메서드를 활용하여 입력된 값을 가져오고 
2. 정규식을 활용하여 정해놓은 규칙과 맞는지 확인하고 
3. 틀리면 css와 html에 작성되어 있는 요소를 이용하여 에러메시지를 표현한다.<br/>
true -> 아무변화없음
false -> 브라우저에 html에 이미 작성해놓은 에러메시지 요소를 활용

_강사님이 이미 .is--invalid라는 클래스가 추가되면 디스플레이가 바뀌도록 CSS에 설정해놓은것을 이용하면 될거 같다._
_+결합자 이기에 error메세지와 인접하는 input의 class에 추가를 해주면 될거같다._

---

✨
1. dom의 요소를 가져옴 -> document.querySelector()를활용<br/>document.querySelector('#userEmail'), document.querySelector( '#userPassword')<br/><br/>dom요소의 입력값을 가져옴 -> .vlaue를 활용<br/>idField.value, pwField.value

<br/>

2. _const idField = document.querySelector( '#userEmail')_<br/>_const pwField = document.querySelector( '#userPassword')_
<br/>emailReg(text)함수를 활용<br/>emailReg(idField.value), pwReg(pwField.value)

<br/>

3. 강사님이 이미 .is--invalid라는 클래스가 추가되면 디스플레이가 바뀌도록 CSS에 설정해놓은것을 이용하면 될거 같다.<br/>+결합자 이기에 error메세지와 인접하는 input의 class에 if문을 활용해 조건에 충족 여부에 따라 추가, 제거를 해주면 될거같다.(이때 클래스를 추가받을 dom요소는 이미document.querySelector()로 가져온  _const idField = document.querySelector( '#userEmail')_,  _const pwField = document.querySelector( '#userPassword')_ 를 사용)<br/><br/> .classList.add, .classList.remove사용<br/>idField.classList.remove('is--invalid'), idField.classList.add('is--invalid')




---

### ⛰️아이디, 비밀번호가 일치시 로그인되는 기능

---

🚩
1. 인풋의 밸류값을 가져오는 메서드를 활용하여 입력된 값을 가져오고 
2. 아이디와 비밀번호를 비교하여 같은지 확인하고
3. 맞으면 사이트를 이동하는 매서드를 이용해 사이트를 이동시키고 아니면 에러 메시지를 알림창으로 띄운다<br/>
    true-> welcome결과창
    false->  아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.
    입력하신 내용을 다시 확인해주세요. 메시지를 표시

---

✨
1. 아까 아이디, 비밀번호가 조건에 맞게 작성이 되었는가에 대한 정보 제공 기능에서 사용했던 변수를 활용하여 값을 가져온다.<br/><br/> .value를 활용<br/> (idField.value, pwField.value)

<br/>

2. _const user = { id:'asd@naver.com', pw:'spdlqj123!@' }_
user객체의 id값과 pw값을 입력된 값과 비교<br/>user.id===idField.value, user.pw===pwField.value

<br/>

3. location.href = ,과 alert를 활용 
location.href = 'welcome.html'와 alert(`아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.`);를 만들고 if문을 활용하여 조건 충족여부에 따라 실행되게 해준다.
---

### ⛰️상태관리
_결과값이 영향을 미치는 컴포넌트가 많아지면 이 결과값이 어디에 영향을 미치는지 파악이 어렵게됨 ->함수마다 결과값을 구하는 함수식을 적어서 구현할순 있지만 이는 코드의 깊이가 길어지면 문제가 발생할수 있음 따라서 상태값을 저장하는 변수를 만들어 이를 관리함으로서 상태값을 쉽게 파악하고 연관을 가진 다른 요소의 관리를 쉽게 하게해줌_ 

---

🚩
함수의 결과값이 다른 함수에 영향을 주는 연결관계 파악
상태관리를 사용하면 함수를 기능별로 더욱 세분화하여 나눠 사용할수 있다.
* 정규식판별하여 에러를 출력하는 함수 -> 정규식 판별하는 함수(**상태변수**) + 값에 활용하여 에러메시지를 출력하는 함수
* 로그인 성공시 다음페이지로 넘어가고 실패시 경고 알림이 뜨는 함수 ->아이디 비밀번호의 일치여부를 판별하는함수(**상태변수**), 다음 페이지로 넘어가는 함수, 경고알림이뜨는 함수

---

✨
1. 

