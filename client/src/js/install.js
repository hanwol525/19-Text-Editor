const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    deferredPrompt = event;
    butInstall.style.display = "flex";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    event.preventDefault();
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice === 'accepted'){
        console.log("Installation accepted");
    } else {
        console.log("Installation rejected");
    }
    butInstall.style.display = "none";
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Successfully installed!');
});
