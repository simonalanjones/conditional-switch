import { memberCount } from "../services/memberData";
//import MemberAdd from './memberAdd';
//import MemberSelect from '../views/memberSelect';
import MemberFields from "../forms/views/memberFields";

export default function MemberIndex({ postback }) {
  console.log(memberCount());
  //   if (memberCount() === 0) {
  //     return <MemberAdd postback={postback} />;
  //   } else {
  //     return <MemberSelect />;
  //   }
  return <MemberFields postback={postback} />;
}
