import React from "react";
import DirectButton from "./direct-button";
import Icon, { Icons } from "@/components/icon";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function EarthSocial(props: any) {
  return (
    <div>
      <div  className="grid grid-cols-1 grid-rows-1" style={{ display: "column", justifyContent: "center" }}>

        <Link
          target="_blank"
          href={props.github}
          className="bg-transparent-100 w-30 mb-6 block  items-center rounded-full py-2 px-6 shadow-md hover:shadow-indigo-500/50 "
        >
          <GitHubIcon />
          <span className="ml-1">Github</span>
        </Link>

        <Link
          target="_blank"
          href={props.linkedin}
          className="bg-transparent-100 w-30 mb-6 block items-center rounded-full py-2 px-6 shadow-md hover:shadow-indigo-500/50 "
        >
          <LinkedInIcon />
          <span className="ml-1">Linkedin</span>
        </Link>
        <DirectButton to="/hakkinda" buttonText="Hakkında" width={30} />
      </div>
    </div>
  );
}

export default EarthSocial;
