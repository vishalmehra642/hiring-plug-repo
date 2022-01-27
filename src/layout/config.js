import Dashboard from "../assets/icons/dashboard.png";
// import img from "../assets/icons/engagedjob.png";
import FAQ from "../assets/icons/faq.png";
import FindJob from "../assets/icons/findjob.png";
import PostAJob from "../assets/icons/jobposted.png";
import ManageTeam from "../assets/icons/manageteam.png";
// import Message from "../assets/icons/message.png";
// import Notification from "../assets/icons/notification.png";

export const SideBarList = [
  { name: "Dashboard", img_link: Dashboard, link: "/employer-dashboard" },
  { name: "Post A Job", img_link: PostAJob, link: "/post-job" },
  { name: "My Jobs", img_link: FindJob, link: "/my-jobs" },
  { name: "Agencies", img_link: "", link: "/agencies" },   /*<i class="far fa-building"></i>*/ 
  { name: "Candidates", img_link: "", link: "/candidates" },
  { name: "Scheduler", img_link: "", link: "/employer-scheduler" },
  // {
  //   name: "Manage Team",
  //   img_link: ManageTeam,
  //   sub_links: [
  //     { sub_links_name: "Panel Users", sub_link: "/employer-panel-users" },
  //     { sub_links_name: "User Role", sub_link: "/employer-user-roles" },
  //     {
  //       sub_links_name: "User Communication",
  //       sub_link: "/employer-user-communications",
  //     },
  //   ],
  //   link: "",
  // },
  // {
  //   name: "Reports",
  //   img_link: ManageTeam,
  //   sub_links: [
  //     { sub_links_name: "Candidate Report" , sub_link : "/employer-reports" },
  //     { sub_links_name: "Agency Report" },
  //     { sub_links_name: "Job Report" },
  //     { sub_links_name: "User Report" },
  //   ],
  //   link: "",
  // },
  // { name: "Help", img_link: "", link: "/help" },
  // { name: "FAQ", img_link: FAQ, link: "/employer-faq" },
  // { name: "Communication", img_link: "", link: "/communication" },
];
export const DropDowns = [
  {
    name: "Manage Team",
    img_link: ManageTeam,
    sub_links: [
      { sub_links_name: "Panel Users", sub_link: "/employer-panel-users" },
      { sub_links_name: "User Role", sub_link: "/employer-user-roles" },
      {
        sub_links_name: "User Communication",
        sub_link: "/employer-user-communications",
      },
    ],
  },
  {
    name: "Reports",
    img_link: ManageTeam,
    sub_links: [
      { sub_links_name: "Candidate Report" , sub_link : "/employer-reports" },
      { sub_links_name: "Agency Report" , sub_link : "/employer-agency-report"},
      { sub_links_name: "Job Report", sub_link : "/employer" },
      { sub_links_name: "User Report" , sub_link : "/employer-report"},
    ],
  },
]
export const SidebarListAssets = [
    { name: "Help", img_link: "", link: "/help" },
  { name: "FAQ", img_link: FAQ, link: "/employer-faq" },
  { name: "Communication", img_link: "", link: "/communication" },
]