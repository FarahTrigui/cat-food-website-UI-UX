import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Slide169OneRowFour from "../../components/Slide169OneRowFour";

export default function Slide169OnePage() {
  return (
    <>
      <Helmet>
        <title>cat food website</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[35px] bg-gray-50 pt-14 md:pt-5">
        <header className="flex w-[87%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
          <div className="flex w-[18%] items-center justify-between gap-5 md:w-full">
            <Img src="images/img_friskay.svg" alt="friskay_one" className="h-[52px] w-[50%]" />
            <div className="h-[47px] w-px bg-gray-500" />
            <Text as="p">Home</Text>
          </div>
          <ul className="flex gap-[30px] sm:flex-col">
            <li>
              <a href="#">
                <div className="flex">
                  <Heading as="h3">Our food</Heading>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="flex">
                  <Heading as="h3">Ingredients</Heading>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="flex">
                  <Heading as="h3">Studies</Heading>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="flex">
                  <Heading as="h3">FAQ</Heading>
                </div>
              </a>
            </li>
          </ul>
        </header>
        <div className="flex flex-col gap-[363px] self-stretch md:gap-[272px] sm:gap-[181px]">
          <div className="flex flex-col items-center gap-9">
            <div className="mx-auto flex w-full max-w-[1593px] flex-col items-center gap-40 md:gap-[120px] md:p-5 sm:gap-20">
              <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                <div className="mt-[59px] flex w-[37%] flex-col items-start md:w-full">
                  <div className="relative left-[30px] flex flex-col items-start">
                    <Heading size="lg" as="h1" className="!text-[65px]">
                      your cat will go
                    </Heading>
                    <Heading size="lg" as="h2" className="relative mt-[-27px]">
                      Bonkers.
                    </Heading>
                  </div>
                  <Text size="xs" as="p" className="relative left-[30px] mt-[17px] w-[96%] leading-[150%] md:w-full">
                    ..for the world’s best testing cat food, sourced with only the finest ingredients. Made with love
                    from the heart of Mississippi.
                  </Text>
                  <Button
                    color="amber_A700"
                    size="sm"
                    shape="round"
                    className="relative left-[30px] mt-[30px] min-w-[289px] sm:px-5"
                  >
                    Get Bonkers
                  </Button>
                </div>
                <div className="relative h-[700px] w-[46%] md:w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[700px] w-[700px] rounded-[350px] bg-orange-50" />
                  <Img
                    src="images/img_cat_1.png"
                    alt="catone_one"
                    className="relative left-[0.00px] right-[30px] top-[0.00px] m-auto h-[587px] w-full object-cover"
                  />
                </div>
              </div>
              <Heading size="md" as="h3" className="w-[49%] text-center tracking-[-3.84px] md:w-full">
                <>
                  Veternarians go bonkers for <br />
                  our tasty kitty formula.
                </>
              </Heading>
            </div>
            <div className="flex flex-col items-center self-stretch">
              <div className="relative h-[663px] self-stretch">
                <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full flex-col items-center">
                <Img src="images/img_group_13.png" alt="image" className="h-[171px] w-full object-cover md:h-auto" />
                <Img
                    src="images/img_ellipse_3.png"
                    alt="image_one"
                    className="relative mt-[-158px] h-[510px] w-[26%] rounded-[250px] "
                  /> 
                </div>
              </div>
              <div className="mx-auto mt-[97px] flex w-full max-w-[1664px] gap-5 md:flex-col md:p-5">
                <div className="flex w-full flex-col items-start gap-[74px] md:gap-[55px] sm:gap-[37px]">
                  <div className="flex items-start self-stretch sm:flex-col">
                    <Text size="md" as="p" className="tracking-[-2.10px]">
                      “
                    </Text>
                    <Text size="xs" as="p" className="mt-[49px] w-[92%] leading-[150%] tracking-[-0.72px] sm:w-full">
                      I&#39;ve never seen a cat food like this before. The nutritional balance is exceptional, and
                      I&#39;ve noticed remarkable improvements in the coat and energy levels of the cats I&#39;ve
                      recommended it to. It&#39;s a game-changer in feline nutrition.
                    </Text>
                  </div>
                  <Heading size="xs" as="h4" className="ml-[60px] tracking-[-0.72px] md:ml-0">
                    Dr. Sasharina
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-start gap-[74px] md:gap-[55px] sm:gap-[37px]">
                  <div className="flex items-start self-stretch sm:flex-col">
                    <Text size="md" as="p" className="tracking-[-2.10px]">
                      “
                    </Text>
                    <Text size="xs" as="p" className="mt-[49px] w-[92%] leading-[150%] tracking-[-0.72px] sm:w-full">
                      I&#39;ve never seen a cat food like this before. The nutritional balance is exceptional, and
                      I&#39;ve noticed remarkable improvements in the coat and energy levels of the cats I&#39;ve
                      recommended it to. It&#39;s a game-changer in feline nutrition.
                    </Text>
                  </div>
                  <Heading size="xs" as="h5" className="ml-[60px] tracking-[-0.72px] md:ml-0">
                    Dr. Sasharina
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-start gap-[74px] md:gap-[55px] sm:gap-[37px]">
                  <div className="flex items-start self-stretch sm:flex-col">
                    <Text size="md" as="p" className="tracking-[-2.10px]">
                      “
                    </Text>
                    <Text size="xs" as="p" className="mt-[49px] w-[92%] leading-[150%] tracking-[-0.72px] sm:w-full">
                      I&#39;ve never seen a cat food like this before. The nutritional balance is exceptional, and
                      I&#39;ve noticed remarkable improvements in the coat and energy levels of the cats I&#39;ve
                      recommended it to. It&#39;s a game-changer in feline nutrition.
                    </Text>
                  </div>
                  <Heading size="xs" as="h6" className="ml-[60px] tracking-[-0.72px] md:ml-0">
                    Dr. Sasharina
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-start gap-[74px] md:gap-[55px] sm:gap-[37px]">
                  <div className="flex items-start self-stretch sm:flex-col">
                    <Text size="md" as="p" className="tracking-[-2.10px]">
                      “
                    </Text>
                    <Text size="xs" as="p" className="mt-[49px] w-[92%] leading-[150%] tracking-[-0.72px] sm:w-full">
                      I&#39;ve never seen a cat food like this before. The nutritional balance is exceptional, and
                      I&#39;ve noticed remarkable improvements in the coat and energy levels of the cats I&#39;ve
                      recommended it to. It&#39;s a game-changer in feline nutrition.
                    </Text>
                  </div>
                  <Heading size="xs" as="h4" className="ml-[60px] tracking-[-0.72px] md:ml-0">
                    Dr. Sasharina
                  </Heading>
                </div>
              </div>
              <div className="relative mt-[-4px] flex flex-col items-center self-stretch">
                <Img
                  src="images/img_bowl_1.png"
                  alt="bowlone_one"
                  className="relative z-[1] h-[467px] w-[45%] object-cover"
                />
                <div className="relative mt-[-349px] flex justify-center self-stretch bg-deep_orange-300 px-14 py-[118px] md:p-5">
                  <div className="mb-[99px] mt-[230px] flex w-[93%] flex-col md:w-full">
                    <div className="mx-auto flex w-full max-w-[1082px] justify-between gap-5 md:p-5">
                      <Button shape="round" className="min-w-[85px] rotate-[5deg] tracking-[-0.60px]">
                        FACT 1
                      </Button>
                      <Button shape="round" className="min-w-[85px] rotate-[5deg] tracking-[-0.60px]">
                        FACT 1
                      </Button>
                    </div>
                    <div className="mx-auto mt-[22px] flex w-full max-w-[1649px] items-start justify-between gap-5 md:flex-col md:p-5">
                      <Text as="p" className="mb-3 w-[46%] leading-[140%] tracking-[-0.90px] md:w-full">
                        Free from artificial colors, flavors, and preservatives, our cat food offers a natural and
                        nutritious diet for your feline friend.
                      </Text>
                      <Text as="p" className="w-[40%] leading-[140%] tracking-[-0.90px] md:w-full">
                        Enriched with omega-3 and omega-6 fatty acids, it promotes a shiny coat and healthy skin, making
                        it ideal for cats with sensitive skin
                      </Text>
                    </div>
                    <div className="mt-[77px] flex flex-col items-start gap-4">
                      <div className="mx-auto flex w-full max-w-[1082px] justify-between gap-5 md:p-5">
                        <Button shape="round" className="min-w-[85px] rotate-[5deg] tracking-[-0.60px]">
                          FACT 3
                        </Button>
                        <Button shape="round" className="min-w-[85px] rotate-[5deg] tracking-[-0.60px]">
                          FACT 3
                        </Button>
                      </div>
                      <div className="mx-auto flex w-full max-w-[1664px] items-start justify-between gap-5 self-stretch md:flex-col md:p-5">
                        <Text as="p" className="w-[44%] leading-[140%] tracking-[-0.90px] md:w-full">
                          Packed with high-quality protein, our new cat food supports strong muscles and a healthy heart
                          in cats of all ages.
                        </Text>
                        <Text as="p" className="w-[41%] leading-[140%] tracking-[-0.90px] md:w-full">
                          Formulated with prebiotics and probiotics, this cat food aids in digestion and supports a
                          balanced gut microbiome.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-[411px] mt-[94px] flex w-[62%] items-center justify-between gap-5 self-end md:mr-0 md:w-full md:flex-col md:p-5">
                <div className="flex w-[50%] flex-col items-end gap-3 md:w-full">
                
                  <Heading size="md" as="h1" className="text-right !text-6xl tracking-[-3.84px]">
                    <>
                      Are you ready to <br />
                      go Bonkers?
                    </>
                  </Heading>
                </div>
                <Button color="amber_A700" size="sm" shape="round" className="mb-[15px] min-w-[289px] self-end sm:px-5">
                  Get Bonkers
                </Button>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center bg-yellow-100 p-[21px] sm:p-5">
            <Slide169OneRowFour className="relative mx-auto mb-[254px] flex w-full max-w-[1669px] items-center justify-between gap-5 md:flex-col" />
          </footer>
        </div>
      </div>
    </>
  );
}
