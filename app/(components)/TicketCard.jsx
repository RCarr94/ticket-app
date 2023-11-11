import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard() {
  return (
    <div>
      <DeleteBlock />
      <PriorityDisplay />
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  )
}
