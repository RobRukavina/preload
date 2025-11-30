let e = null;

window.addEventListener('mouseup', function(event) {
     e = event;
});

async function looping() {
     while (e === null || e.button !== 0) {
     await new Promise(resolve => setTimeout(resolve, 10));
     console.log("looping...");
     }
     console.log("event: ", e);
     return;
};