// ourdomain.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meet up",
    image:
      "https://images.unsplash.com/photo-1571534980863-05f4c9e55568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    address: "Some address 1, 1234 Some City",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "second meet up",
    image:
      "https://images.unsplash.com/photo-1641927420960-8059f26993d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    address: "Some address 2, 1234 Some City",
    description: "this is a second meetup",
  },
  {
    id: "m3",
    title: "third meet up",
    image:
      "https://images.unsplash.com/photo-1641830684144-dc331c1d3228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    address: "Some address 3, 1234 Some City",
    description: "this is a third meetup",
  },
];

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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

export default Home;
