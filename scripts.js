// Write your JavaScript code here.
// Remember to pay attention to page loading!

// add load event handler to window
function init () {
    // window.alert("inside script");
     const takeOffButton = document.getElementById("takeoff");
     const flightStatusChange = document.getElementById("flightStatus");
     const shuttleBackGroundColor = document.getElementById("shuttleBackground");
     const landingButton = document.getElementById("landing");
     const spaceShuttleHeightChange = document.getElementById("spaceShuttleHeight");
     const missionAbortButton = document.getElementById("missionAbort");
     let upButtonAction = document.getElementById("upButton");
     let downButtonAction = document.getElementById("downButton");
     let rightButtonAction = document.getElementById("rightButton");
     let leftButtonAction = document.getElementById("leftButton");
     let rocketPosition = document.getElementById("rocket");
     let directionChange = document.getElementById("direction");
    let fuelLevelPosition = document.getElementById("fuelLevel");
    //  let shuttleUpHeight = 0;
     let shuttleDownHeight = 0;
     rocketPosition.style.top = "250px";
    //numberOfSteps += 10;
    let position = 0;

      //Takeoff button
    takeOffButton.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatusChange.innerHTML = "Shuttle in flight.";
           shuttleBackGroundColor.style.background='#0000FF';
           spaceShuttleHeightChange.innerHTML="10000";
        //    rocketPosition.style.top = "350px";
         } 
       
    });  

    //Land Button
    landingButton.addEventListener("click",function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatusChange.innerHTML = "The shuttle has landed.";
        shuttleBackGroundColor.style.background='';
        spaceShuttleHeightChange.innerHTML="0";
        // rocketPosition.style.top = `${rocketPosition.offsetTop + 100}px`;
        rocketPosition.style.position = "relative";
        rocketPosition.style.top = "250px";
    });  
       
    //Abort Mission Button
    missionAbortButton.addEventListener("click",function (event) {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatusChange.innerHTML = "Mission aborted.";
           shuttleBackGroundColor.style.background='';
           spaceShuttleHeightChange.innerHTML="0";
           rocketPosition.style.position = "relative";
           rocketPosition.style.top = "250px";
         } 
        });

    //Up Button
    upButtonAction.addEventListener("click",function (event) {
        rocketPosition.style.position = "relative";
        // rocketPosition.style.bottom = "10px";
        rocketPosition.style.top = `${rocketPosition.offsetTop - 10}px`;
        // let shuttleUpHeight = spaceShuttleHeightChange.innerHTML;
        let shuttleUpHeight = parseInt(spaceShuttleHeightChange.innerHTML);
        shuttleUpHeight = parseInt(shuttleUpHeight) + 10000;
        spaceShuttleHeightChange.innerHTML = shuttleUpHeight;
        
        //  spaceShuttleHeightChange =`${spaceShuttleHeightChange} + 10000`;
        // spaceShuttleHeightChange.setAttribute("spaceShuttleHeightChange", "`${spaceShuttleHeightChange}.innerHTML + 10000`")
        // event.stopPropagation();
        });

    //Down Button
    downButtonAction.addEventListener("click",function (event) {
        rocketPosition.style.position = "relative";
        // rocketPosition.style.top = "10px";
        rocketPosition.style.top = `${rocketPosition.offsetTop + 10}px`;
        shuttleDownHeight = spaceShuttleHeightChange.innerHTML;
        shuttleDownHeight = parseInt(shuttleDownHeight) - 10000;
        spaceShuttleHeightChange.innerHTML = shuttleDownHeight;
        // spaceShuttleHeightChange.innerHTML="10000";
        // event.stopPropagation();
        });

    //Right Button
    rightButtonAction.addEventListener("click",function (event) {
       rocketPosition.style.position = "relative";
       position += 10;
        rocketPosition.style.left = position + "px";
        // directionChange.style.clear = "both";
        // directionChange.style.float = "right";
    //    directionChange.style.position = "absolute";
        // rocketPosition.style.left = "10px";
        // rocketPosition.style.left = `${rocketPosition.offsetLeft - 10}px`;
        spaceShuttleHeightChange.innerHTML="0";
        // directionChange.style.position = "absolute";
        // shuttleBackGroundColor.style.position = "fixed";
        // fuelLevelPosition.style.position = "fixed";
        
        });

    //Left Button
    leftButtonAction.addEventListener("click",function (event) {
        rocketPosition.style.position = "relative";
        position = position - 10;
        rocketPosition.style.left = position + "px";
        // rocketPosition.style.right = "10px";
        // rocketPosition.style.right = `${rocketPosition.offsetLeft - 10}px`;
        // rocketPosition.style.left += "10px";
        // rocketPosition.style.left += "10px";
        // rocketPosition.style.left = 10 + "px";
        // rocketPosition.style.transform = "translateX(" + 10 + "px)";
        // rocketPosition.style.left = parseInt(rocketPosition.style.left) + 10 + 'px';
        spaceShuttleHeightChange.innerHTML="0";
        // img.style.left = `${img.offsetLeft - 10}px`;
        // event.stopPropagation();
        });

    }
    window.addEventListener("load", init);



