import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import schedule from "@/public/schedule.png";

export const metadata = {
  title: "Schedule | HackByte",
  description:
    "Check out the schedule for HackByte! Stay updated with the timeline of events and activities happening during IIIT Jabalpur's hackathon.",
  keywords:
    "Hackathon schedule, Timeline, Events, IIITDMJ, Hackbyte, Coding, Programming, Tech",
  openGraph: {
    title: "Schedule | HackByte",
    description:
      "Check out the schedule for HackByte! Stay updated with the timeline of events and activities happening during IIIT Jabalpur's hackathon.",
    url: "https://hackbyte.in/schedule",
    images:
      "https://res.cloudinary.com/dlsqbiwug/image/upload/v1736876616/Frame_463_zdbkgu.png",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const Schedule = () => {
  const EventFlowBox = ({ h, bgColor, title, description, time, snacks }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 font-gotham font-black">
        <div className="font-bold text-2xl text-supporting-lightGray min-w-[116px]">
          {time}
        </div>
        <div className="flex items-center gap-4 sm:mt-8 h-auto">
          <div
            className="min-w-[100px] rounded-3xl"
            style={{ height: h, backgroundColor: bgColor }}
          ></div>
          <div>
            <div className="text-[18px] xs:text-[20px] sm:text-[28px] lg:text-[32px] text-white text-wrap">{title}</div>
            <div className={`${snacks ? "block" : "hidden"} text-[#FFA4AD] text-xl`}>+ SNACKS TIME!</div>
            {description && (
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-supporting-mediumGray text-wrap">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen px-4 md:px-16 lg:px-20 xl:px-28 pt-[32px] md:pt-16 xl:pt-12 pb-40">
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex justify-between items-center md:items-start">
            <div className="flex flex-col items-start gap-2">
              <div className="text-supporting-lightGray text-[36px] xs:text-[42px] lg:text-[4rem] xl:text-[6rem] leading-tight font-black max-w-[95%] md:max-w-[85%] lg:max-w-[95%] xl:max-w-[90%]">
                Run of show for the Event
              </div>
              <p
                className="w-full lg:max-w-[85%] text-supporting-mediumGray
                text-lg lg:text-[1.5rem] font-medium"
              >
                Join us for days packed with coding challenges and workshops.
                Elevate your skills and collaborate with fellow hackers!
              </p>
            </div>
            <Image
              src={schedule}
              alt="schedule"
              className="lg:w-[250px] lg:h-[250px] w-32 h-32 md:w-48 md:h-48 hidden md:block"
            />
          </div>
          <Tabs
            defaultValue="Day 1"
            className="flex flex-col justify-center mt-4 md:mt-12"
          >
            <TabsList className="bg-transparent mb-5 md:mb-11 flex gap-4 justify-start">
              <TabsTrigger
                value="Day 1"
                className="sm:text-xl text-md font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
              >
                Day 1
              </TabsTrigger>
              <TabsTrigger
                value="Day 2"
                className="sm:text-xl text-md font-bold text-supporting-mediumGray 
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
              >
                Day 2
              </TabsTrigger>
              <TabsTrigger
                value="Day 3"
                className="sm:text-xl text-md font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
              >
                Day 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Day 1">
              <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center py-8 font-gotham font-black text-white">
                <div className="text-[28px] xs:text-[32px] sm:text-[48px] lg:text-[64px] text-nowrap">4th April</div>
                <div className="text-supporting-mediumGray text-[20px] xs:text-[24px] sm:text-[28px] lg:text-[32px]">
                  Hacking Time: 3.5 Hours
                </div>
              </div>
              <EventFlowBox
                h="256px"
                bgColor="#0275f6"
                time="2:30 PM"
                title="Entry to the Hackathon Location"
                description="Main gate - Front of LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="75px"
                bgColor="#0275f6"
                time="5:00 PM"
                title="Inauguration Ceremony"
                description="Auditorium, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="50px"
                bgColor="#0275f6"
                time="5:45 PM"
                title="Introducing the event flow, Problem Statement"
                description="Auditorium, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="50px"
                bgColor="#0275f6"
                time="6:15 PM"
                title="Explain Rules, HackByte 3.0 begins!"
                description="Auditorium, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="25px"
                bgColor="#0275f6"
                time="6:45 PM"
                title="Move to Hacking Area"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="200px"
                bgColor="#FF3044"
                time="7:00 PM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="9:00 PM"
                title="Dinner Time!"
                description="Mess, Hostel Area"
              />
              <EventFlowBox
                h="200px"
                bgColor="#FF3044"
                time="10:00 PM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <div className="font-bold text-2xl text-supporting-lightGr min-w-[116px] text-white">
                12:00 AM
              </div>
            </TabsContent>
            <TabsContent value="Day 2">
              <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center py-8 font-gotham font-black text-white">
                <div className="text-[28px] xs:text-[32px] sm:text-[48px] lg:text-[64px] text-nowrap">5th April</div>
                <div className="text-supporting-mediumGray text-[20px] xs:text-[24px] sm:text-[28px] lg:text-[32px]">
                  Hacking Time: 14.5 Hours
                </div>
              </div>

              <EventFlowBox
                h="150px"
                bgColor="#1EB848"
                time="12:00 AM"
                title="Mentorship Round 1"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="1:30 AM"
                title="MINI Event - SLOT 1"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="150px"
                bgColor="#FF3044"
                time="2:30 AM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
                snacks={true}
              />
              <EventFlowBox
                h="75px"
                bgColor="#FF3044"
                time="4:30 AM"
                title="Checkpoint 1/4"
                description=""
              />
              <EventFlowBox
                h="225px"
                bgColor="#FF3044"
                time="5:15 AM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="7:30 AM"
                title="Breakfast Time!"
                description="Mess, Hostel Area"
              />
              <EventFlowBox
                h="150px"
                bgColor="#FFC20C"
                time="8:30 AM"
                title="Workshop/Session - SLOT 2"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="200px"
                bgColor="#FF3044"
                time="10:00 AM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="12:00 PM"
                title="Lunch Break!"
                description="Mess, Hostel Area"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FF3044"
                time="1:00 PM"
                title="Checkpoint 2/4"
                description=""
              />
              <EventFlowBox
                h="200px"
                bgColor="#1EB848"
                time="2:00 PM"
                title="Judging Round 1"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FF3044"
                time="4:00 PM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="6:00 PM"
                title="Workshop/Session - SLOT 3"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="200px"
                bgColor="#FF3044"
                time="8:00 PM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="9:00 PM"
                title="Dinner Time!"
                description="Mess, Hostel Area"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FF3044"
                time="10:00 PM"
                title="Checkpoint 3/4"
                description=""
              />
              <EventFlowBox
                h="200px"
                bgColor="#FF3044"
                time="11:00 PM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <div className="font-bold text-2xl text-supporting-lightGray min-w-[116px]">
                12:00 AM
              </div>
            </TabsContent>
            <TabsContent value="Day 3">
              <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center py-8 font-gotham font-black text-white">
                <div className="text-[28px] xs:text-[32px] sm:text-[48px] lg:text-[64px] text-nowrap">6th April</div>
                <div className="text-supporting-mediumGray text-[20px] xs:text-[24px] sm:text-[28px] lg:text-[32px]">
                  Hacking Time: 2.5 Hours
                </div>
              </div>
              <EventFlowBox
                h="150px"
                bgColor="#1EB848"
                time="12:00 AM"
                title="Mentorship Round 2"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FF3044"
                time="1:30 AM"
                title="MINI Event - SLOT 4"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="150px"
                bgColor="#FF3044"
                time="2:30 AM"
                title="Hacking Time"
                description="L104/L105, LHTC (Lecture Hall)"
                snacks={true}
              />
              <EventFlowBox
                h="150px"
                bgColor="#FF3044"
                time="4:00 AM"
                title="Checkpoint 4/4"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="150px"
                bgColor="#8514FE"
                time="5:30 AM"
                title="Soft Deadline"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="50px"
                bgColor="#8514FE"
                time="7:00 AM"
                title="Hard Deadline"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="7:30 AM"
                title="Breakfast Time!"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="8:30 AM"
                title="Break"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="250px"
                bgColor="#1EB848"
                time="9:30 AM"
                title="Judging Round 2"
                description="Mess, Hostel Area"
              />
              <EventFlowBox
                h="100px"
                bgColor="#FFC20C"
                time="12:00 PM"
                title="Lunch Break"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="150px"
                bgColor="#FFC20C"
                time="1:00 PM"
                title="Ice-Breaker Event"
                description="L104/L105, LHTC (Lecture Hall)"
              />
              <EventFlowBox
                h="150px"
                bgColor="#0275F6"
                time="2:30 PM"
                title="Closing Ceremony & Result Declaration"
                description="Mess, Hostel Area"
              />
              <div className="font-bold text-2xl text-supporting-lightGr min-w-[116px] text-white">
                4:00 PM
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Schedule;
