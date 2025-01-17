"use client";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  DateRangePicker,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import CoverImage from "../../../../public/hero-cover.png";
import { MapPin } from "lucide-react";
import { locations } from "@/utils/data/locations";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Image Background */}
      <div className="absolute inset-0 top-0 z-0">
        <Image
          src={CoverImage}
          alt="background-image"
          className="object-cover h-full w-full"
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 opacity-50 z-1" />

      {/* Content */}
      <div className="absolute z-2 flex flex-col gap-5 h-full w-full items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Find Your Trek
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-neutral-300 md:max-w-lg sm:max-w-xs max-w-md mx-auto">
          The journey of a thousand miles begins with a single
          step into the wild.
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          {/* Location component */}
          <Autocomplete
            className="max-w-xs text-black border-gray-500"
            placeholder="Location"
            color="default"
            startContent={<MapPin className="text-gray-500" />}
            variant="flat"
          >
            {locations.map((location) => (
              <AutocompleteItem key={location.key}>
                {location.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          {/* Date Component */}

          <DateRangePicker
            aria-label="Date"
            selectorButtonPlacement="start"
            className="max-w-xs"
            variant="flat"
          />
        </div>
        <Button as={Link} href="/trek" className="text-black bg-white">
          Search for Trek
        </Button>
      </div>
    </section>
  );
};

export default React.memo(Hero);