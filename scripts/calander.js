document.addEventListener('DOMContentLoaded', function () {
    const eventForm = document.querySelector('.event-form');
    const eventNameInput = document.getElementById('event-name');
    const eventDateInput = document.getElementById('event-date');
    const eventList = document.querySelector('.event-list');

    // Load events from local storage if available
    const events = JSON.parse(localStorage.getItem('events')) || [];

    // Function to render the event list
    function renderEvents() {
        eventList.innerHTML = '';
        events.forEach(function (event) {
            const eventItem = document.createElement('div');
            eventItem.classList.add('event-item');
            eventItem.innerHTML = `
                <p>${event.name}</p>
                <p>${event.date}</p>
            `;
            eventList.appendChild(eventItem);
        });
    }

    renderEvents();

    // Function to add a new event
    function addEvent() {
        const name = eventNameInput.value.trim();
        const date = eventDateInput.value.trim();

        if (name === '' || date === '') {
            alert('Please enter both event name and date.');
            return;
        }

        events.push({ name, date });
        localStorage.setItem('events', JSON.stringify(events));

        // Clear input fields
        eventNameInput.value = '';
        eventDateInput.value = '';

        renderEvents();
    }

    eventForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addEvent();
    });
});
