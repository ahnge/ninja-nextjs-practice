// ourdomain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetUpPage = () => {
  const router = useRouter();

  const addMeetUpHandler = async (enteredMeetUpData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm>;
};

export default NewMeetUpPage;
