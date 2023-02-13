import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./forms/views/layouts/baseLayout";
import Membership from "./routes/membership";
import Agent from "./routes/agent";
import MemberView from "./routes/memberView";
import MemberIndex from "./routes/member";
import MemberLayout from "./forms/views/layouts/memberLayout";
import { getMembers, addMember } from "../src/services/memberData";
import { setMembership, getMembership } from "./services/membershipData";
import ErrorPage from "./errorPage";
import "./index.css";

const selectMember = (index) => {
  console.log("selected..", index);
};

const membershipPostback = (fields) => {
  const membership = {
    membershipNumber: fields.membershipNumber,
    dateCompleted: fields.dateCompleted,
    memberSwitchFrom: fields.memberSwitchFrom,
  };
  setMembership(membership);
};

const postback = (fields) => {
  console.log("hello postback", fields);
  let uniqueId =
    new Date().getTime().toString(36) + new Date().getUTCMilliseconds();

  const member = {
    id: uniqueId,
    userFirstName: fields.userFirstName,
    userLastName: fields.userLastName,
    title: fields.title,
    relation: fields.relation,
    phoneNumber: fields.phoneNumber,
    dateOfBirth: fields.dateOfBirth,
    conditions: [],
  };

  addMember(member);
};

const memberList = () => {
  console.log("members", getMembers());
  return getMembers();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "membership",
        element: (
          <Membership data={getMembership()} postback={membershipPostback} />
        ),
      },
      {
        path: "agent",
        element: <Agent />,
      },
    ],
  },
  {
    path: "/member",
    element: (
      <MemberLayout
        membership={getMembership()}
        memberList={memberList()}
        memberSelect={selectMember}
      />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "index",
        element: <MemberIndex postback={postback} />,
      },
      {
        path: "view/:id",
        element: <MemberView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
