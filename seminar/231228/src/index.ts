type ProfessorNumber = string;
type EmployeeNumber = string;
type StudentNumber = string;
type Locate = string;
type Rank = string;

// type ProfessorPrintType = Member<ProfessorNumber> & Professor;
// type EmployeePrintType = Member<EmployeeNumber> & Employee;
// type StudentPrintType = Member<StudentNumber> & Student;
// type PrintType = ProfessorPrintType | EmployeePrintType | StudentPrintType;
type PrintType = Professor | Employee | Student;

const log = console.log;

class Member<T> {
  #id: T;
  #name: string;
  #phoneNumber: string;
  #email: string;

  constructor(
    id: T,
    name: string,
    phoneNumber: string,
    email: string,
  ) {
    this.#id = id;
    this.#name = name;
    this.#phoneNumber = phoneNumber;
    this.#email = email;
  }

  get id(): T {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get phoneNumber(): string {
    return this.#phoneNumber;
  }

  get email(): string {
    return this.#email;
  }

  getInfo() {
    return {
      id: this.#id,
      name: this.#name,
      phoneNumber: this.#phoneNumber,
      email: this.#email,
    };
  }
}

class Professor extends Member<ProfessorNumber> {
  #lab: Locate;

  constructor(
    id: ProfessorNumber,
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

class Employee extends Member<EmployeeNumber> {
  #office: Locate;

  constructor(
    id: EmployeeNumber,
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

class Student extends Member<StudentNumber> {
  #academicRecord: Rank;

  constructor(
    id: StudentNumber,
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

function printInfo(info: PrintType): void {
  log(
    `ID : ${info.id} \nName : ${info.name} \nPhoneNumber : ${info.phoneNumber} \nEmail : ${info.email}`,
    info instanceof Professor ? `\nLab : ${info.lab}\n` :
      info instanceof Employee ? `\nOffice : ${info.office}\n` :
        info instanceof Student ? `\nAcademicRecord : ${info.academicRecord}\n` : "\nERROR\n",
  );
}

// function printInfo(info: PrintType): void {
//   log(
//     `ID : ${info.id} \nName : ${info.name} \nPhoneNumber : ${info.phoneNumber} \nEmail : ${info.email}`,
//     'lab' in info ? `\nLab : ${info.lab}` :
//       'office' in info ? `\nOffice : ${info.office}` :
//         'academicRecord' in info ? `\nAcademicRecord : ${info.academicRecord}` : "ERROR",
//   );
// }

const professor = new Professor
(
  "1",
  "Kim",
  "010-1234-1234",
  "Kim@wisoft.io",
  "N5-503",
);

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

printInfo(professor);
printInfo(employee);
printInfo(student);
printInfo(student2);

// employee.getInfo()
// printInfo(employee.getInfo())