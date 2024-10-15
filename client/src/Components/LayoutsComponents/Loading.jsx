import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loading = ({ text }) => {
  return (
    <section className="w-full h-80 flex items-center justify-center flex-col gap-y-4">
      {/* <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      /> */}
      <div className="text-xl text-blue animate-bounce pr-4 my-40">{text}</div>
    </section>
  );
};

export default Loading;
