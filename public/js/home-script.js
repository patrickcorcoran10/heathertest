/*FORM DATA*/
const regex = /[*^~]/g;
const madlibContainer = document.querySelector(".madlib-container");

const spliceFunction = (lib, noun, verb, adj) => {
    const libArray = lib.split(regex);
    const newerLib = libArray[0] + noun + libArray[1] + adj + libArray[2] + verb + libArray[3];
    console.log(libArray);
    console.log(newerLib);
    madlibContainer.textContent = newerLib;
};

const madlibGET = async () => {
    try {
        const response = await fetch("/madlibz", {
            method: "GET",
        });
        if (response.ok) {
            const data = await response.json();
            console.log("GET call made", data);
            spliceFunction(data, "bike", "run", "fast");
        } else {
            throw new Error("Network response was not ok");
        }
    } catch (error) {
        console.log(error);
    }
};

madlibGET(); 




