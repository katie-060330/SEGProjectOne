function toggleText(id) {
    var x = document.getElementById(id);
    if (x.style.maxHeight) {
      x.style.maxHeight = null;
    } else {
      x.style.maxHeight = x.scrollHeight + "px";
    }
  }
  

//cite https://chatgpt.com/c/492f3594-a11f-4461-b1a4-64b251053e4e

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const monthYear = document.getElementById('monthYear');
  const daysContainer = document.getElementById('days');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  let date = new Date();
  
  function renderCalendar() {
    daysContainer.innerHTML = ''; // Clear previous days
    
    const month = date.getMonth();
    const year = date.getFullYear();
    
    // Get the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const firstDay = new Date(year, month, 1).getDay();
    
    // Get the last day of the month
    const lastDay = new Date(year, month + 1, 0).getDate();
    
    // Display the current month and year
    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
    
    // Create empty divs for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      daysContainer.innerHTML += '<div></div>';
    }
    
    // Create divs for each day of the month
    for (let i = 1; i <= lastDay; i++) {
      const dayElement = document.createElement('div');
      dayElement.textContent = i;
      dayElement.addEventListener('click', () => {
        // Remove 'selected' class from all day elements
        document.querySelectorAll('.days div').forEach(el => el.classList.remove('selected'));
        
        // Add 'selected' class to the clicked day element
        dayElement.classList.add('selected');
        
  
      });
      daysContainer.appendChild(dayElement);
    }
  }
  
  // Event listener for the previous month button
  prevButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });
  
  // Event listener for the next month button
  nextButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
  
  // Initial rendering of the calendar
  renderCalendar();
});
