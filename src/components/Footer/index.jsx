import React from "react";
import styled from "styled-components";
import tw from "twin.macro";const MyFooter = styled.div`
  ${tw`
    w-full
    bg-black
    flex-auto
    justify-center
    mb-3
  `};
`;    
function FooterSection() {
  return ( 
    <MyFooter>
          <p className="mx-3 text-base text-gray-500">
              Created by Raphael using framework Tailwind. 2021
          </p>
    </MyFooter>
   );
}

export default FooterSection;