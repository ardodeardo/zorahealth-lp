"use client";

import React from "react";
import Image from "next/image";

// embla
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/app/components/common/Carousel/arrow";

// dummy content
import { testimonials } from "@/app/constants/content/testimonials";

// others
import { PATH } from "@/app/constants/config/path";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
  const options: EmblaOptionsType = {
    // loop: true,
    // breakpoints: {
    //   "(min-width: 1024px)": { loop: true },
    // },
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div
      id="c-testimonials"
      className="c-testimonials bg-[#FCFAF5] rounded-lg w-full flex flex-col justify-end lg:min-h-[624px]"
    >
      <div
        ref={emblaRef}
        className="embla__viewport overflow-hidden p-7 space-y-8"
      >
        <div className="embla__container flex -ml-7 items-end">
          {testimonials.map((testimony) => {
            const { uuid, name, roles, image, testimony_words } = testimony;

            return (
              <div
                key={uuid}
                className="embla__slide pl-7 flex-none basis-full"
              >
                <div className="space-y-6">
                  <h4 className="font-ppeditorial text-[28px]/[150%] lg:text-[32px]/[150%]">
                    &quot;{testimony_words}&quot;
                  </h4>

                  <div className="flex gap-x-3 items-start">
                    <figure className="bg-[#ebebeb] rounded-full">
                      <Image
                        alt={image.alt}
                        src={PATH.image.concat(
                          `pages/course/experts/${image.url}`
                        )}
                        width={72}
                        height={72}
                        className="min-w-[72px] min-h-[72px] rounded-full"
                      ></Image>
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold">{name}</h3>
                      <ul>
                        {roles.map((role, index) => (
                          <li
                            key={name.concat(index.toString())}
                            className="text-sm font-medium"
                          >
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-x-1 justify-end">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="embla__arrow--prev bg-[#D75555] w-14 h-14 rounded-full grid place-content-center disabled:opacity-50"
          >
            <ChevronLeft className="w-8 h-8 text-white"></ChevronLeft>
          </PrevButton>

          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="embla__arrow--next bg-[#D75555] w-14 h-14 rounded-full grid place-content-center disabled:opacity-50"
          >
            <ChevronRight className="w-8 h-8 text-white"></ChevronRight>
          </NextButton>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
