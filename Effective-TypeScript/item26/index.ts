// 3장 타입 추론 - 타입 추론에 문맥이 어떻게 사용되는지 이해하기

// // 인라인 형태
// setLanguage('JavaScript');

// // 참조 형태
// let language = 'JavaScript';
// setLanguage(language);

// function setLanguage(language: string) { /* --- */ };

// setLanguage('JavaScript');

// let language = 'JavaScript';
// setLanguage(language);

type Language = 'JavaScript' | 'TypeScript' | 'Java';
function setLanguage(language: Language) { /* --- */ };

// setLanguage('JavaScript');

// let language = 'JavaScript';
// setLanguage(language);

// let language: Language = 'JavaScript';
// setLanguage(language);

const language = 'JavaScript';
setLanguage(language);

// function panTo(where: [number, number]) { /* ... */ };

panTo([10, 20]);

// const loc = [10, 20];

// panTo(loc);

// const loc: [number, number] = [10, 20];
// panTo(loc);

// const loc = [10, 20] as const;
// panTo(loc);

function panTo(where: readonly [number, number]) { /* ... */ };

// const loc = [10, 20] as const;
// panTo(loc);

// const loc = [10, 20, 30] as const;
// panTo(loc);

// type Language = 'JavaScript' | 'TypeScript' | 'Java';
interface GovernedLanguage {
    language: Language;
    organization: string;
}

function complain(language: GovernedLanguage) { /**/ };

complain({ language: 'TypeScript', organization: 'Microsoft'});

const ts = {
    language: 'TypeScript',
    organization: 'Micorsoft',
};

// complain(ts);

function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
}

callWithRandomNumbers((a, b) => {
    console.log(a + b);
})

// const fn = (a, b) => {
//     console.log(a + b);
// }

const fn = (a: number, b: number) => {
    console.log(a + b);
}