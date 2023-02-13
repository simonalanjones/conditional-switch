import MemberFields from "../forms/views/memberFields";

export default function MemberIndex() {
  console.log("hello from index");
  return <MemberFields />;
  //   if (memberCount() === 0) {
  //     return <MemberAdd postback={postback} />;
  //   } else {
  //     return <MemberSelect />;
  //   }
  //return <MemberFields postback={postback} />;
}
