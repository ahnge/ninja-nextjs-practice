// domain.com/idString
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const DetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetUpData.title}</title>
        <meta name="description" content="Thisis the detials page" />
      </Head>
      <MeetupDetails
        img={props.meetUpData.image}
        title={props.meetUpData.title}
        address={props.meetUpData.address}
        description={props.meetUpData.description}
      ></MeetupDetails>
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maxi:YkfUvqrRtVXpDHRf@cluster0.qos2l.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const data = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: data.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  // fetch data
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://maxi:YkfUvqrRtVXpDHRf@cluster0.qos2l.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const singleMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetUpData: {
        id: singleMeetup._id.toString(),
        image: singleMeetup.image,
        title: singleMeetup.title,
        address: singleMeetup.address,
        description: singleMeetup.description,
      },
    },
  };
};

export default DetailPage;
