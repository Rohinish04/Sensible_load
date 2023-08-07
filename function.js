function calculateCoolingLoad(event) { 
event.preventDefault(); 
const area = parseFloat(document.getElementById("area").value); const numOccupants = 
parseInt(document.getElementById("occupants").value); 
const buildingType = document.getElementById("buildingType").value; const outdoorTemp = 
parseFloat(document.getElementById("outdoorTemp").value); const indoorTemp = 
parseFloat(document.getElementById("indoorTemp").value); 
let coolingLoad; 
if (buildingType === "residential") { 
coolingLoad = 100 * numOccupants; 
} else if (buildingType === "commercial") { 
coolingLoad = 150 * numOccupants; 
} else { 
document.getElementById("result").innerText = "Invalid building  type. Supported types: residential, commercial"; 
return; 
} 
const U = 30; // Overall heat transfer coefficient (W/m²°C) 
const QConduction = U * area * (outdoorTemp - indoorTemp); const sensibleCoolingLoad = QConduction + coolingLoad; 
document.getElementById("result").innerText = `Sensible Cooling  Load: ${sensibleCoolingLoad.toFixed(2)} Watts`; 
} 
