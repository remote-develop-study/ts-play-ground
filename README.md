# TypeScript 놀이터

## 필수 설치 요소
Git : <https://git-scm.com/>

NodeJS : <https://nodejs.org/ko>

IDE or Text Editor : IntelliJ 또는 Visual Studio Code 권장

## 설치 과정
```bash
git clone https://github.com/typescript-study/play-ground.git

cd play-ground

npm install
```

## 활용방법
- 모든 코드 연습은 [유닛 테스트 단위](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%9B_%ED%85%8C%EC%8A%A4%ED%8A%B8)로 진행합니다.

## 타입스크립트 컴파일 방법
```bash
// 기본 명령어
npm run build
```
루트의 built 폴더를 통해 JavaScript로 컴파일된 결과물을 볼 수 있습니다.

## 테스트
```bash
npm run test `작업 중인 파일명`

// src/chapter1/oop.spec.ts 케이스 작업 중일 경우
npm run test `oop`
```
src 폴더내에서 테스트 파일을 작성 후 위의 명령어 입력시 테스트 결과가 출력됩니다.

## 폴더 구조
```bash
├── node_modules              # Node Packages 모듈
├── src                       # 소스코드
│   ├── chapter1              # 버전 또는 진도별로 폴더명을 설정합니다(기준을 정할 예정)
│       ├── 파일명.spec.ts     # 테스트 케이스를 만들어 코드를 테스트합니다. 
│       └── 파일명.ts          # 테스트할 코드를 만듭니다.
│   ├── chapter2              # 버전 또는 진도별로 폴더명을 설정합니다(기준을 정할 예정)
│   ├── chapter3              # 버전 또는 진도별로 폴더명을 설정합니다(기준을 정할 예정)
├── .gitignore                # 프로젝트내에 버전관리 무시 목록
├── jest.config.json          # 테스트 라이브러리 jest의 설정파일
├── package-lock.json         # NodeJS 의존성 관리
├── package.json              # 프로젝트 설정 및 NodeJS 의존성 관리
├── README.md                 # 설명 및 가이드
└── tsconfig.json             # TypeScript 컴파일 옵션 설정
```
