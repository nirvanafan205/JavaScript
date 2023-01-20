//if we try to await something in a regular function 

function fetchResponse(url) {
    const response = await fetch(url);
    return response;
}

//JS doesnt't allow it


//we need to make it an async function

async function fetchResponse(url) {
    const response = await fetch(url);
    return response;
}