import NewMeetupForm from "../meetups/NewMeetupForm";

function NewMeetupPage() {
    function onAddMeetupHandler(meetupData) {
        fetch('');
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;