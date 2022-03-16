# Ticket redesign

## How to run

Same as given in task description 

## Task notes

- For Task 2, I chose an approach where all of the tickets are loaded in App.tsx. This way, we only have to make one API call.
This is not how it would work for a real application (we would most probably need to make calls on every search and on each ticket info page load). But for the scope of the task, this was the most effective approach. Also, the API call now happens before
the search button is clicked, ideally App.tsx would handle the search event, and only load them afterwards, but I didn't want to spend more time and make it more complex.
- For displaying ticket info, I used indexes of tickets as URL parameters. In a normal application, I would use an ID instead.
- I encountered some linting errors, and type suggestions didn't work so well either. I didn't care to fix these for the scope of this test.