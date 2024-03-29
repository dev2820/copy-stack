# copy-stack

> Copy Stack은 복사본을 쌓고 관리할 수 있게 도와주는 크롬 익스텐션입니다.

복사한 내용을 기록하고 다시 불러올 수 있게 도와줍니다. 만약 한번에 1개의 복사 내용만 저장할 수 있어 불편했다면 이 extension이 도움이 될 것입니다.

크롬 브라우저 배포) https://chrome.google.com/webstore/detail/copy-stack/hbankbfbknfophpnhcadjfkcbeppbmfl?hl=ko&authuser=0  
웨일 브라우저 배포) https://store.whale.naver.com/detail/pinkglbbkjkdcmcagonkaofijjpmohdi?hl=ko

[EN-README](/docs/README.en.md)

## 🔧기능들

### 요약

### 1. 텍스트 저장하기
텍스트를 드래그해 선택한 뒤 context menu의 'store to Copy Stack'를 통해 앱 내에 저장할 수 있습니다.

생성된 복사본을 통해 요약된 문장과 복사본을 생성한 주소, 생성 날짜를 볼 수 있습니다. 하단의 Copy 버튼으로 클립보드에 복사할 수 있고 delete 버튼으로 지울 수 있습니다.

### 2. 이미지 저장하기
이미지 역시 context menu의 'store to Copy Stack'을 통해 앱 내에 저장할 수 있습니다. 

⚠️ 클립보드 시스템 특성상 png를 제외한 다른 타입은 저장할 수 없습니다. 따라서 복사한 이미지는 자동으로 png로 변환됩니다.

### 3. 필터
상단의 필터를 통해 원하는 타입의 복사본만 보이도록 변경할 수 있습니다. 복사본은 Text와 Image, 두 종류의 타입이 있으며, 토글 형식으로 타입을 필터링할 수 있습니다.

### 4. 상세 내용 페이지
복사본의 'show detail' 버튼을 눌러 디테일 페이지로 이동할 수 있습니다. 생성 일자, 복사본을 생성한 링크를 볼 수 있습니다.

텍스트 복사본에 대한 페이지인 경우 경우 텍스트가 총 몇 자인지, 이미지 복사본에 대한 페이지인  경우 이미지의 사이즈가 얼마인지 추가적으로 알려줍니다. 

### 텍스트 복사

![텍스트 복사](/docs/images/context-text.png)  
텍스트를 선택하고 우클릭하면 나타나는 'store to Copy Stack'메뉴를 통해 텍스트를 앱에 저장할 수 있습니다.

![텍스트 복사](/docs/images/copy.png)  
![텍스트 복사](/docs/images/delete.gif)  
생성된 복사본을 보면 요약된 문장과 복사본을 생성한 주소, 생성 날짜를 볼 수 있습니다.
복사본은 하단의 delete 버튼을 통해 삭제할 수 있고, copy 버튼을 눌러 클립보드로 옮길 수 있습니다.

### 이미지 복사

![텍스트 복사](/docs/images/context-image.png)  
이미지 역시 우클릭->store to Copy Stack 메뉴를 통해 복사본을 생성합니다.

![텍스트 복사](/docs/images/copy-image.png)  
이미지 역시 우클릭->store to Copy Stack 메뉴를 통해 복사본을 생성합니다. 이미지에 대한 미리보기를 제공합니다. 역시 delete를 통해 지우고, Copy를 통해 복사할 수 없습니다.

주의) 클립보드 시스템의 특성상 PNG를 제외한 다른 타입은 저장할 수 없습니다. 따라서 복사한 이미지는 자동으로 PNG로 변환됩니다.

### 필터

![텍스트 복사](/docs/images/filter.gif)  
생성한 복사본은 상단의 필터를 통해 필터링할 수 있습니다. 필터는 토글 방식으로, 원하는 타입만 모아볼 수 있습니다.

### 디테일 페이지

![텍스트 복사](/docs/images/detail1.png)  
![텍스트 복사](/docs/images/detail2.gif)  
복사본의 'show detail' 버튼을 눌러 디테일 페이지로 이동할 수 있습니다. 생성 일자, 복사본을 생성한 링크를 볼 수 있고, 텍스트 복사본의 경우 텍스트가 총 몇자인지, 이미지 복사본의 경우 이미지의 사이즈가 얼마인지 추가적으로 알려줍니다.

## 버전 정보
#### 1.1.0
복사본의 소스정보 왼쪽에 파비콘을 추가했습니다.

## 사용 스택

- Lit
- Typescript
- Storybook
- Jest
