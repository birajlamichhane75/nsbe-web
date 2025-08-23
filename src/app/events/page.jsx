
import EventDetails from "@/helpers/sections/eventdetails";
import HomeBanner from "@/helpers/sections/homeBanner";
import Calendar from "@/helpers/sections/nsbecalender";


export default function Home() {
  return (
      <div>
        <HomeBanner title="NSBE EVENTS" />
        <Calendar />
        <EventDetails />
      </div>

  )
}
