import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div  className="font-semibold overflow-hidden">
      <p className="p-3 m-7 bg-red-200 rounded-3xl">
        Disclaimer: The Virtual Clinic Bot is an automated chatbot and is
        designed to provide general medical information and advice based on the
        users input. However, it is important to note that the information
        provided by the bot is not intended to replace professional medical
        advice, diagnosis, or treatment. The Virtual Clinic Bot is not a
        substitute for a face-to-face consultation with a qualified healthcare
        professional. The user assumes full responsibility for any decisions
        made based on the information provided by the bot. The creators and
        operators of the Virtual Clinic Bot do not qualify to provide any form
        of medical suggestions/prescriptions and shall not be held liable for
        any damages or injuries resulting from the use of the bot. By using the
        Virtual Clinic Bot, the user acknowledges and accepts this disclaimer.
      </p>
      <div className="flex justify-center">
        <Link href="/components/Ambulance">
          <div className="flex justify-center p-28 my-20 mx-5 bg-slate-300 rounded-3xl hover:bg-slate-400 shadow-2xl">
            Book an Ambulance
          </div>
        </Link>
        <Link href="/components/VirtualClinic">
          <div className="flex justify-center p-28 my-20 mx-5  bg-slate-300 rounded-3xl hover:bg-slate-400 shadow-2xl">
            Virtual Clinic
          </div>
        </Link>
        <Link href="/components/DiseasePredictions">
          <div className="flex justify-center p-28 my-20 mx-5   bg-slate-300 rounded-3xl hover:bg-slate-400 shadow-2xl">
            Disease Predictions
          </div>
        </Link>
        <Link href="/components/MentalHealth">
          <div className="flex justify-center p-28 my-20 mx-5 max-w-screen-md bg-slate-300 rounded-3xl hover:bg-slate-400 shadow-2xl">
            Mental Health Chat
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
