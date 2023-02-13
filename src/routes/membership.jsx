import MembershipFields from "../components/membershipFields";
//import { setMembership, getMembership } from "../services/membershipData";
//import { useNavigate } from "react-router-dom";

export default function Membership({ data, postback }) {
  //const navigate = useNavigate();

  const handleCancel = () => {
    //navigate("/");
  };

  const handleSubmit = (fields) => {
    // const membership = {
    //   membershipNumber: fields.membershipNumber,
    //   dateCompleted: fields.dateCompleted,
    //   memberSwitchFrom: fields.memberSwitchFrom,
    // };

    //setMembership(membership);
    postback(fields);
    //navigate("/");
  };

  return (
    <MembershipFields
      data={data}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
}
