// ourdomain.com/
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function Home({ meetups }) {
  return <MeetupList meetups={meetups}></MeetupList>;
}

// export const getServerSideProps = async () => {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://maxi:YkfUvqrRtVXpDHRf@cluster0.qos2l.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const data = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: data.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 10,
  };
};

export default Home;
