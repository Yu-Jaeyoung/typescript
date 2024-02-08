/**
 * 엔터티 객채 1개 생성
 * 엔터티에 대한 맴버 객체 1개 생성
 * 회원 엔터티 생성
 * 회원 오브젝트 생성
 * 회원 가입할 때 사용하는 데이터 구조 = 회원 정보 전부 create
 * 회원 로그인할 때 사용되는 데이터 구조 = 아이디, 비밀번호 login
 * 회원 수정할 때 사용되는 데이터 구조 = 수정할 내용 받기 (단, 로그인한 상태) modify
 * 회원 정보 = DTO??
 * - 아이디 / id
 * - 성명 / realName
 * - 비밀번호 / password
 * - 이메일 / email
 * - 전화 번호 / phoneNumber
 * - 깃랩 아이디 / username
 * - WiSoft 멤버여부 / wiSoftMember
 * - 직책 / position  ex) 학부생, 석사과정, 박사과정, 박사님, 교수님, 졸업생
 */

type CellPhoneNumber = string;
type Email = string;
type Password = string;
type uuid = string;
type KoreanName = string;

class MemberEntity {
  id: uuid;
  password: Password;
  realName: KoreanName;
  email: Email;
  cellPhone: CellPhoneNumber;
  username: string;
  affiliation: string;
  joinAt: Date;
  createdAt: Date;
  updateAt: Date;
  isWiSoftMember: boolean;

  constructor(id: uuid, password: Password, realName: KoreanName, email: Email, cellPhone: CellPhoneNumber, username: string, affiliation: string, joinAt: Date, createdAt: Date, updateAt: Date, isWiSoftMember: boolean) {
    this.id = id;
    this.password = password;
    this.realName = realName;
    this.email = email;
    this.cellPhone = cellPhone;
    this.username = username;
    this.affiliation = affiliation;
    this.joinAt = joinAt;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
    this.isWiSoftMember = isWiSoftMember;
  }
}


// 맴버 객체 - 패스워드, 생성시기, 업데이트시기 만 제외
// type Member = Omit<MemberEntity, "password">;
// 맴버는 클래스로 만드는 게 좋다. -> 객체 핸들링을 위해
class Member {
  id: uuid;
  realName: KoreanName;
  email: Email;
  cellPhone: CellPhoneNumber;
  username: string;
  affiliation: string;
  joinAt: Date;
  isWiSoftMember: boolean = false;

  constructor(id: uuid, realName: KoreanName, email: Email, cellPhone: CellPhoneNumber, username: string, affiliation: string, joinAt: Date, isWiSoftMember: boolean) {
    this.id = id;
    this.realName = realName;
    this.email = email;
    this.cellPhone = cellPhone;
    this.username = username;
    this.affiliation = affiliation;
    this.joinAt = joinAt;
    this.isWiSoftMember = isWiSoftMember;
  }
}


/**
 * 회원 가입 - isWisoftMember 만 제외(정책에 따라 다르다.)
 * DTO = interface 이는 Pick 을 사용하면 좋을것 같음, 자바의 interface 와는 다름!!!!
 * 키워드 사용 시 생명주기 생각
 */
type CreateMemberDTO = Omit<Member, "id" | "isWiSoftMember"> & { password: Password };

// interface createMember {
//   password: Password;
//   realName: KoreanName;
//   email: Email;
//   cellPhone: CellPhoneNumber;
//   username: string;
//   affiliation: string;
//   joinAt : Date;
// }


/**
 * 회원 수정
 * 전화 번호와 이메일 만 수정 가능하다고 가정하고 진행
 * 이름 제외
 */
type UpdateMemberDTO = Pick<Member, "email" | "cellPhone">;


/**
 * 회원 승인
 * id, isWiSoftMember
 * 권한을 주는 용도 -> isWiSoftMember 를 true로 변환하는데 사용
 */
type ApproveWiSoftMemberDTO = Pick<Member, "id" | "isWiSoftMember">;