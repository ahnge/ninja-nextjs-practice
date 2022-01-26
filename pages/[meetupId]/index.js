// domain.com/whatever
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";

const DetailPage = () => {
  return (
    <MeetupDetails
      img="https://images.unsplash.com/photo-1571534980863-05f4c9e55568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
      title="first meetup"
      address="Some addresss randomely"
      description="This is a first meetup"
    ></MeetupDetails>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maxi:YkfUvqrRtVXpDHRf@cluster0.qos2l.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetUpData: {
        img: "https://images.unsplash.com/photo-1571534980863-05f4c9e55568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        title: "first meetup",
        address: "Some addresss randomely",
        description: "This is a first meetup",
      },
    },
  };
};

export default DetailPage;
