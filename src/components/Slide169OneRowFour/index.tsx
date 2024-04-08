import React from "react";
import { Heading, Text, Img } from "./..";

interface Props {
  className?: string;
  homeOne?: string;
  ourfoodFour?: string;
  ourfoodFive?: string;
  ourfoodSix?: string;
  ourfoodSeven?: string;
}

export default function Slide169OneRowFour({
  homeOne = "Home",
  ourfoodFour = "Our food",
  ourfoodFive = "Ingredients",
  ourfoodSix = "Studies",
  ourfoodSeven = "FAQ",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex w-[18%] items-center justify-between gap-5 md:w-full">
        <Img src="images/img_friskay.svg" alt="friskay_five" className="h-[52px] w-[50%]" />
        <div className="h-[47px] w-px bg-blue_gray-900" />
        <Text as="p">{homeOne}</Text>
      </div>
      <ul className="relative flex w-[50%] flex-wrap items-center justify-between gap-5 text-left text-[50px] md:w-full">
        <li>
          <a href="#">
            <Heading as="h1">{ourfoodFour}</Heading>
          </a>
        </li>
        <li>
          <a href="Ingredients" target="_blank" rel="noreferrer" className="self-end">
            <Heading as="h2">{ourfoodFive}</Heading>
          </a>
        </li>
        <li>
          <a href="Studies" target="_blank" rel="noreferrer">
            <Heading as="h2">{ourfoodSix}</Heading>
          </a>
        </li>
        <li>
          <a href="FAQ" target="_blank" rel="noreferrer">
            <Heading as="h2" className="!text-3xl">
              {ourfoodSeven}
            </Heading>
          </a>
        </li>
      </ul>
    </div>
  );
}
