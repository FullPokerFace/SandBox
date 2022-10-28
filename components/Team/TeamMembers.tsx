import Image from "next/image";
import pic1 from "/public/pics/team/1.jpg";
import pic2 from "/public/pics/team/2.jpg";
import pic3 from "/public/pics/team/3.jpg";
import pic4 from "/public/pics/team/4.jpg";
import twitterIcon from "/public/icons/social/twitter.svg";
import fbIcon from "/public/icons/social/facebook.svg";
import liIcon from "/public/icons/social/linkedIn.svg";
import { MediumHeading } from "../_common/MediumHeading";

const teamMembers = [
  {
    name: "Coriss Ambady",
    img: pic1,
    title: "Financial Analyst",
    motto: "Fermentum massa justo sit amet risus morbi leo.",
    links: [
      { icon: twitterIcon, href: "#" },
      { icon: fbIcon, href: "#" },
      { icon: liIcon, href: "#" },
    ],
  },
  {
    name: "Abby Green",
    img: pic2,
    title: "Front End Engineer",
    motto: "Fermentum massa justo sit amet risus morbi leo.",
    links: [
      { icon: twitterIcon, href: "#" },
      { icon: fbIcon, href: "#" },
      { icon: liIcon, href: "#" },
    ],
  },
  {
    name: "John Doe",
    img: pic3,
    title: "Team Lead",
    motto: "Fermentum massa justo sit amet risus morbi leo.",
    links: [
      { icon: twitterIcon, href: "#" },
      { icon: fbIcon, href: "#" },
      { icon: liIcon, href: "#" },
    ],
  },
  {
    name: "Angelica Wong",
    img: pic4,
    title: "QA Engineer",
    motto: "Fermentum massa justo sit amet risus morbi leo.",
    links: [
      { icon: twitterIcon, href: "#" },
      { icon: fbIcon, href: "#" },
      { icon: liIcon, href: "#" },
    ],
  },
];

export const TeamMembers = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-10 justify-center">
      {teamMembers &&
        teamMembers.length > 0 &&
        teamMembers.map((member, index) => (
          <div
            key={"member" + index}
            className="flex flex-col gap-3 items-center text-center rounded-lg p-8 shadow-lg max-w-xs"
          >
            <Image
              src={member.img}
              alt={member.name}
              className="rounded-full"
            />
            <MediumHeading>{member.name}</MediumHeading>
            <p className="text-zinc-400">{member.title.toUpperCase()}</p>
            <p>{member.motto}</p>
            <div className="flex gap-3 w-full justify-center">
              {member?.links &&
                member?.links?.length > 0 &&
                member?.links?.map((link, index) => (
                  <a key={"SocialLink" + index} href={link.href}>
                    <Image
                      height={20}
                      width={20}
                      src={link.icon}
                      alt="social"
                    />
                  </a>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};
