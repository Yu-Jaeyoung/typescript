type ProfessorNumber = string;
type EmployeeNumber = string;
type StudentNumber = string;
type Locate = string;
type Rank = string;

type PrintType<T> = Professor<T> | Employee<T> | Student<T>;

const log = console.log;

class Member<T> {
  protected id: T;
  protected name: string;
  protected phoneNumber: string;
  protected email: string;

  constructor(
    id: T,
    name: string,
    phoneNumber: string,
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      phoneNumber: this.phoneNumber,
      email: this.email,
    };
  }
}

class Professor<T> extends Member<T> {
  #lab: Locate;

  constructor(
    id: T,
    name: string,
    phoneNumber: string,
    email: string,
    lab: Locate,
  ) {
    super(id, name, phoneNumber, email);
    this.#lab = lab;
  }

  get lab(): Locate {
    return this.#lab;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      lab: this.#lab,
    };
  }
}

class Employee<T> extends Member<T> {
  #office: Locate;

  constructor(
    id: T,
    name: string,
    phoneNumber: string,
    email: string,
    office: Locate,
  ) {
    super(id, name, phoneNumber, email);
    this.#office = office;
  }

  get office(): Locate {
    return this.#office;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      office: this.#office,
    };
  }
}

class Student<T> extends Member<T> {
  #academicRecord: Rank;

  constructor(
    id: T,
    name: string,
    phoneNumber: string,
    email: string,
    academicRecord: Rank,
  ) {
    super(id, name, phoneNumber, email);
    this.#academicRecord = academicRecord;
  }

  get academicRecord(): Rank {
    return this.#academicRecord;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      academicRecord: this.#academicRecord,
    };
  }
}

// function printInfo(info: PrintType): void {
//   log(
//     `ID : ${info.id} \nName : ${info.name} \nPhoneNumber : ${info.phoneNumber} \nEmail : ${info.email}`,
//     info instanceof Professor ? `\nLab : ${info.lab}\n` :
//       info instanceof Employee ? `\nOffice : ${info.office}\n` :
//         info instanceof Student ? `\nAcademicRecord : ${info.academicRecord}\n` : "\nERROR\n",
//   );
// }

// instanceof 보다는 in을 활용
function printInfo<T>(info: PrintType<T>): void {
  log(info);
}

const professor = new Professor
(
  "1",
  "Kim",
  "010-1234-1234",
  "Kim@wisoft.io",
  "N5-503",
);

// console.log(professor.id);

const employee = new Employee
(
  "2",
  "Hong",
  "010-1234-4567",
  "Hong@wisoft.io",
  "N5-511",
);

const student = new Student
(
  "3",
  "Bae",
  "010-1234-5678",
  "Bae@wisoft.io",
  "학부생",
);

const student2 = new Student
(
  "4",
  "Ahn",
  "010-1324-5670",
  "Ahn@wisoft.io",
  "대학원생",
);

// printInfo(professor);
// printInfo(employee);
// printInfo(student);
// printInfo(student2);

// TypeCasting "as" 활용
// 먼저 unknown 으로 변환한 후 다시 캐스팅으로 할 것
printInfo(professor.getInfo() as unknown as PrintType<ProfessorNumber>);
printInfo(employee.getInfo() as unknown as PrintType<EmployeeNumber>);
printInfo(student.getInfo() as unknown as PrintType<StudentNumber>);
printInfo(student2.getInfo() as unknown as PrintType<StudentNumber>);

// Class 구조를 그대로 출력하게됨
// private 값은 보여지지 않음
printInfo(professor);