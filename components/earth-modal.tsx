import dynamic from "next/dynamic";
import React from "react";

const EarthMap = dynamic(() => import("@/components/earth-map"), {
  ssr: false,
});

export default function EarthModal(props: any) {
  return (
    <>
      {props.isPopupOpen ? (
        <>
          <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-scroll outline-none focus:outline-none ">
            <div className="relative my-6 mx-auto w-auto max-w-3xl overflow-x-hidden overflow-y-scroll">
              {/*content*/}
              <div
                style={{
                  //backgroundColor: "grey",
                  width: "500px",
                  height: "500px",
                }}
                className="relative flex flex-col overflow-x-hidden overflow-y-scroll rounded-lg border-0 bg-white  shadow-lg outline-none focus:outline-none dark:bg-zinc-800"
              >
                {/*header*/}
                <div className=" flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h6 className="text-3xl font-semibold">{props.title}</h6>
                  <button
                    className="opacity-1 text-1xl float-right  ml-auto border-0 bg-transparent p-1 font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={props.onClose}
                  >
                    ❌
                  </button>
                </div>
                {/*body*/}
                <div className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none">
                  <EarthMap
                    data={props.data}
                    center={props.center}
                    height="50vh"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={props.onClose}
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
