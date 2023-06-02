// Add event listener to the form submission
var content;

const madlibForm = document.getElementById('madlibForm');
madlibForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const nounInput = document.getElementById('noun');
  const verbInput = document.getElementById('verb');
  const adjInput = document.getElementById('adjective');
  
  const noun = nounInput.value;
  const verb = verbInput.value;
  const adj = adjInput.value;
  
  let userInput = [noun,verb,adj];
  
  let madlib = content.content;
  let count = 0;

  while(madlib.search(/%([^%]+)%/g) != -1) {
    madlib = madlib.replace(/%([^%]+)%/, userInput[count]);
    count++;
  }

  console.log(madlib);
  send({title: content.title, content: madlib});
});

async function send(obj) {
  try {
    const response = await fetch("api/Madlibz", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });
    
    const data = await response.json();
    console.log("POST request made", data);
    
    // Perform any additional actions with the response data
  } catch (error) {
    console.log(error);
  }
}

async function init() {
  const response = await fetch("api/Madlibz/", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    content = await response.json();
  }
}

init();