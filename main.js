document.addEventListener("DOMContentLoaded", function () {
    // Medication array to store data
    let medications = [];

    // Function to add medication
    window.addMedication = function () {
        const medName = document.getElementById("medName").value;
        const dosage = document.getElementById("dosage").value;
        const frequency = document.getElementById("frequency").value;
        const instructions = document.getElementById("instructions").value;

        // Add medication to array
        medications.push({
            name: medName,
            dosage: dosage,
            frequency: frequency,
            instructions: instructions,
            reminders: [],
        });

        // Clear form fields
        document.getElementById("medForm").reset();

        // Update reminder and history lists
        updateReminders();
        updateHistory();
    };

    // Function to update reminders list
    function updateReminders() {
        const reminderList = document.getElementById("reminderList");
        reminderList.innerHTML = "";

        medications.forEach((medication) => {
            // Logic to check if a reminder is due (you can customize this based on your needs)
            if (Math.random() < 0.2) {
                const reminderItem = document.createElement("li");
                reminderItem.textContent = `${medication.name} - Take medication now!`;
                reminderList.appendChild(reminderItem);

                // Add the reminder to the medication's reminder list
                medication.reminders.push(new Date());
            }
        });
    }

    // Function to update history list
    function updateHistory() {
        const historyList = document.getElementById("historyList");
        historyList.innerHTML = "";

        medications.forEach((medication) => {
            medication.reminders.forEach((reminder) => {
                const historyItem = document.createElement("li");
                historyItem.textContent = `${medication.name} - Taken on ${reminder.toLocaleString()}`;
                historyList.appendChild(historyItem);
            });
        });
    }

    // Update reminders and history every 30 seconds
    setInterval(() => {
        updateReminders();
        updateHistory();
    }, 30000);
});
