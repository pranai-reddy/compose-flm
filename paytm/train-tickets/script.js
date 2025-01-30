document.getElementById('ticketForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  const passengerCount = document.getElementById('passengerCount').value;

  // Display ticket details
  document.getElementById('ticketFrom').textContent = from;
  document.getElementById('ticketTo').textContent = to;
  document.getElementById('ticketDate').textContent = date;
  document.getElementById('ticketPassengers').textContent = passengerCount;

  // Show ticket details
  document.getElementById('ticketDetails').style.display = 'block';
});
