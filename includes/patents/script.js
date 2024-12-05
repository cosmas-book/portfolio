// List of Indian Design Patents
const patents = [
    { title: "Solar Panel Cleaning Robot for Industrial Solar Power Plants", grantedOn: "April 2022" },
    { title: "AI Smart Glasses for Visually Impaired", grantedOn: "June 2022" },
    { title: "Battery Pack for Electric Vehicle", grantedOn: "May 2023" },
    { title: "IoT-Based Solar Powered Agriculture Robot", grantedOn: "June 2023" },
    { title: "Hydrogen Fuel Bike", grantedOn: "May 2023" },
    { title: "Milk Quality Analyzing Device", grantedOn: "May 2023" },
    { title: "Air and Water Quality Identifying Pen", grantedOn: "May 2023" },
    { title: "Intelligent Sensor-Based Bio-Degradable Waste Collection Unit", grantedOn: "July 2023" },
    { title: "Machine Learning Based Robot for Determining Crop Yield", grantedOn: "July 2023" },
    { title: "Machine Learning-Based Humanoid Device for Object Identification", grantedOn: "2023" },
    { title: "Solar Powered Glass Cleaning Robot", grantedOn: "2023" },
    { title: "IoT-Based Automatic Robotic Waste Bin", grantedOn: "2023" },
    { title: "AI-Based Plant Extract Analyzing Device to Identify Disease", grantedOn: "2023" },
    { title: "Smart Trolley with Product Tracking Using IoT", grantedOn: "2023" },
    { title: "Solar and Wind Powered Electric Vehicle", grantedOn: "2023" },
    { title: "AI-Based Ferrous and Nonferrous Waste Sorting Machine", grantedOn: "2023" },
    { title: "Wireless Instruction Detection Device", grantedOn: "2023" },
    { title: "AI-Based Crop Health Monitoring Device", grantedOn: "2023" },
    { title: "IoT-Based Automated Rail Track Inspection Trolley", grantedOn: "2023" },
    { title: "AI Robotic Device for Inventory Management", grantedOn: "2023" },
    { title: "Solar Powered Smart Hat for Physically Challenged", grantedOn: "2023" },
    { title: "AI-Based Intrusion Detection Device for Agricultural Fields", grantedOn: "2023" },
    { title: "AI-Based Energy Efficient Dehumidifier", grantedOn: "2023" },
    { title: "IoT-Based Street Cleaning Vehicle", grantedOn: "2023" },
    { title: "AI-Based Women Safety Detecting Wrist Band", grantedOn: "2023" },
    { title: "IoT-Based Automatic Vehicle Tracking Device", grantedOn: "2023" },
    { title: "Thermo Chemical Plant to Convert Waste into Energy Material", grantedOn: "2023" },
    { title: "IoT-Based Thermal Image Camera for Solar Powered Plants", grantedOn: "2023" },
    { title: "IoT-Based Solar Empowered Agriculture Robot", grantedOn: "2023" },
    { title: "AI-Based Device to Detect Efficiency of Employees", grantedOn: "2023" },
    { title: "Sea Water Desalination Apparatus Using Solar Energy", grantedOn: "2023" },
    { title: "IoT-Based Photovoltaic Cell Testing Device", grantedOn: "2023" },
    { title: "AI-Based Agriculture Drone for Monitoring and Spraying Pesticides", grantedOn: "2023" },
    { title: "Hybrid IC Engine", grantedOn: "2023" },
    { title: "Driver Drowsiness Detection Device Based on AI", grantedOn: "2023" },
    { title: "Renewable Energy Powered Poles to Detect Noise Pollution", grantedOn: "2023" },
    { title: "AI and IoT-Based Stress Detection Cap", grantedOn: "2023" },
    { title: "Automatic Hybrid Seed Planting and Smart Liquid Spray Machine", grantedOn: "2023" },
    { title: "Machine Learning Based Robot for Determining Crop Yield", grantedOn: "2023" },
    { title: "Solar Powered Air Pollution Indicator", grantedOn: "2023" },
    { title: "Alloy Mixing Casting Machine", grantedOn: "2023" },
    { title: "Device for Nano Coating Transfer", grantedOn: "2023" },
    { title: "AI-Based Fish Freshness Analyzing Device", grantedOn: "2023" },
    { title: "IoT-Based Crop Health Monitoring Device", grantedOn: "2023" },
    { title: "Financial Data Managing Device in Bank", grantedOn: "2023" },
    { title: "Concrete Test Hammer", grantedOn: "2023" },
    { title: "Hydrothermal Liquefaction Reactor", grantedOn: "2023" },
    { title: "AI-Based Device to Monitor Employee Performance", grantedOn: "2023" },
    { title: "Thermal Spray Gun for Nanoparticle Coating", grantedOn: "2023" },
    { title: "IoT-Based Face Reading Device", grantedOn: "2023" },
    { title: "AI-Based Photovoltaic Cell Testing Device", grantedOn: "2023" },
    { title: "Device to Monitor and Alert Heart Attack", grantedOn: "2023" },
    { title: "AI-Based Firefighting Drone", grantedOn: "2023" }
];

// Function to render the list dynamically
function renderPatents() {
    const patentListElement = document.getElementById('patent-list');
    patents.forEach(patent => {
        const patentItem = document.createElement('li');
        patentItem.innerHTML = `
            <strong>${patent.title}</strong> (${patent.grantedOn})
               
        `;
        patentListElement.appendChild(patentItem);
    });
}

// Call the function to render the patents
renderPatents();