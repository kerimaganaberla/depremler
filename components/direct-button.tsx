import React from "react";
import Link from "next/link";

export default function DirectButton(props: any) {
  return (
    <Link
      href={props.to}
      className={`bg-black-900 inline-flex w-${props.width} items-center  rounded-full  py-2 px-6 shadow-md hover:shadow-red-500/50`}
    >
      {props.buttonText}
    </Link>
  );
}
