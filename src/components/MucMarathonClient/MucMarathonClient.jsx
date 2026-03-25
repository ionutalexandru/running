"use client";

import QuestionBlockLink from "@/components/QuestionBlockLink/QuestionBlockLink";
import Image from "next/image";
import ionutPic from "@/../public/ionut.png";
import marathonMucPic from "@/../public/marathon-muc-logo.svg";
import { faqData } from "@/lib/mucMarathon/faqData";
import FaqModal from "@/components/FaqModal/FaqModal";
import { useState } from "react";


export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <h1 className="hidden">MUC Marathon 2025</h1>
      <div className="w-100 flex justify-center">
        <Image
          src={ionutPic}
          alt="Ionut running"
          width="125"
          height="125"
          loading="eager"
        />
        <Image
          src={marathonMucPic}
          alt="MUC Marathon logo"
          width="125"
          height="125"
          className="filter invert"
          loading="eager"
        />
      </div>
      <QuestionBlockLink label="FAQ" onClick={() => setModalOpen(true)} />
      <QuestionBlockLink
        label="Live Tracking"
        disabled
      />
      <QuestionBlockLink
        href="https://open.spotify.com/playlist/1XsrwQ2KfWNyyHP2VfODcQ?si=8b29df8e176c41cb&pt=0d25e4f5ed2d53287f1fb174f8346fa4"
        label="Spotify Playlist"
      />
      <FaqModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        data={faqData}
      />
    </>
  );
}
