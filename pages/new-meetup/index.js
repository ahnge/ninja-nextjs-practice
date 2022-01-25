// ourdomain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const addMeetUpHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };

  return <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm>;
};

export default NewMeetUpPage;
