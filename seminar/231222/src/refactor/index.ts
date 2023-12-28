// 지켜야할 정리 사항
// 1. Data를 사용하는 곳에서 최종 적으로 console.log으로 출력하는 형식으로 작성
// 2. 위 과정은 구조 분해 할당을 통해서 진행
// 3. 프린트의 역할을 하는 친구는 따로 선언할 것
// 4. 많이 사용하는 것은 type 선언하여 간단하게 만들기
// 5. 데이터의 타입 정의는 확실하게 정의해주기
//  5.1 id로 통일할 것 / 각 클래스의 id는 제네릭을 사용해서 타입을 바꾸자 (다음주 이야기)
//  5.2 getter를 사용하면 private 값을 얻을 수 있음

type ProfessorNumber = string;
type EmployeeNumber = string;
type StudentNumber = string;
type Locate = string;
type Rank = string;

const log = console.log;

class Member {
  #name: string;
  #phoneNumber: string;
  #email: string;

  constructor(
    name: string,
    phoneNumber: string,
    email: string,
  ) {
    this.#name = name;
    this.#phoneNumber = phoneNumber;
    this.#email = email;
  }

  getInfo() {
    return {
      name: this.#name,
      phoneNumber: this.#phoneNumber,
      email: this.#email,
    };
  }
}

class Professor extends Member {
  #id: ProfessorNumber;
  #lab: Locate;

  constructor(
    id: ProfessorNumber,
    name: string,
    phoneNumber: string,
    email: string,
    lab: Locate,
  ) {
    super(name, phoneNumber, email);
    this.#id = id;
    this.#lab = lab;
  }

  getInfo() {
    return {
      id: this.#id,
      lab: this.#lab,
      ...super.getInfo(),
    };
  }
}

class Employee extends Member {
  #id: EmployeeNumber;
  #office: Locate;

  constructor(
    id: EmployeeNumber,
    name: string,
    phoneNumber: string,
    email: string,
    office: Locate,
  ) {
    super(name, phoneNumber, email);
    this.#id = id;
    this.#office = office;
  }

  getInfo() {
    return {
      id: this.#id,
      office: this.#office,
      ...super.getInfo(),
    };
  }
}

class Student extends Member {
  #id: StudentNumber;
  #academicRecord: Rank;

  constructor(
    id: StudentNumber,
    name: string,
    phoneNumber: string,
    email: string,
    academicRecord: Rank,
  ) {
    super(name, phoneNumber, email);
    this.#id = id;
    this.#academicRecord = academicRecord;
  }

  getInfo() {
    return {
      id: this.#id,
      academicRecord: this.#academicRecord,
      ...super.getInfo(),
    };
  }
}

const professor = new Professor
(
  "1",
  "Kim",
  "010-1234-1234",
  "Kim@wisoft.io",
  "N5-503",
);
log(professor.getInfo());

const employee = new Employee
(
  "2",
  "Hong",
  "010-1234-4567",
  "Hong@wisoft.io",
  "N5-511",
);
log(employee.getInfo());

const student = new Student
(
  "3",
  "Bae",
  "010-1234-5678",
  "Bae@wisoft.io",
  "학부생",
);
log(student.getInfo());

const student2 = new Student
(
  "4",
  "Ahn",
  "010-1324-5670",
  "Ahn@wisoft.io",
  "대학원생",
);
console.log(student2.getInfo());