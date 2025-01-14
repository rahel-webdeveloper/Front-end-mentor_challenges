async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        let summaryItems = '';

        jsonData.map(item => {
            summaryItems += `    
        <div class="flex__group ${item.class}">
           <div class="state">
             <img src="${item.icon}" alt="img">       
             <p>${item.category}</p>
           </div>

           <p class="summary__score">
            ${item.score}
             <span>/ 100</span>
            </p>
        </div> 
    `
        });
        document.querySelector('.summary__item').innerHTML += summaryItems;
    }  
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();