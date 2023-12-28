/*
type Member = {
  memberNumber: number;
  name: string;
  phoneNumber: number;
  email: string;
}
*/

// 타입 선언 구체화 과정 필요
class HBNU_Member {
  #memberNumber: number;
  #name: string;
  #phoneNumber: string;
  #email: string;

  constructor(
    memberNumber: number,
    name: string,
    phoneNumber: string,
    email: string,
  ) {
    this.#memberNumber = memberNumber;
    this.#name = name;
    this.#phoneNumber = phoneNumber;
    this.#email = email;
  }

  // 함수를 사용하면 결과 값을 반환해야한다. * return *
  // console.log로 구지 ?
  printInfo() {
    console.log("----------------------------");
    console.log("MemberNumber : " + this.#memberNumber);
    console.log("Name : " + this.#name);
    console.log("PhoneNumber : " + this.#phoneNumber);
    console.log("Email : " + this.#email);
  };
}

class Professor extends HBNU_Member {
  #lab: string;

  constructor(
    memberNumber: number,
    name: string,
    phoneNumber: string,
    email: string,
    lab: string,
  ) {
    super(memberNumber, name, phoneNumber, email);
    this.#lab = lab;
  }

  printInfo() {
    super.printInfo();
    console.log('Lab : ' + this.#lab);
  }
}


class Employee extends HBNU_Member {
  #office: string;

  constructor(
    memberNumber: number,
    name: string,
    phoneNumber: string,
    email: string,
    office: string,
  ) {
    super(memberNumber, name, phoneNumber, email);
    this.#office = office;
  }

  printInfo() {
    super.printInfo();
    console.log("Office : " + this.#office);
  }
}

class Student extends HBNU_Member {
  #academicRecord: string;

  constructor(
    memberNumber: number,
    name: string,
    phoneNumber: string,
    email: string,
    academicRecord: string,
  ) {
    super(memberNumber, name, phoneNumber, email);
    this.#academicRecord = academicRecord;
  }

  printInfo() {
    super.printInfo();
    console.log("AcademicRecord : " + this.#academicRecord);
  }
}

class PostGraduateStudent extends HBNU_Member {
  #academicRecord: string;

  constructor(
    memberNumber: number,
    name: string,
    phoneNumber: string,
    email: string,
    academicRecord: string,
  ) {
    super(memberNumber, name, phoneNumber, email);
    this.#academicRecord = academicRecord;
  }

  printInfo() {
    super.printInfo();
    console.log("AcademicRecord : " + this.#academicRecord);
  }
}

const professor = new Professor(1, "Kim", "010-1234-1234", "Kim@wisoft.io", "N5-503");
professor.printInfo();

const employee = new Employee(2, "Hong", "010-1234-4567", "Hong@wisoft.io", "N5-511");
employee.printInfo();

const student = new Student(3, "Bae", "010-1234-5678", "Bae@wisoft.io", "학적");
student.printInfo();

const postGraduateStudent = new PostGraduateStudent(4, "Lee", "010-1234-5678", "Lee@wisoft.io", "학적");
postGraduateStudent.printInfo();