import { db } from "../db.mjs";

export async function notifyFeeder(feedingTimeId) {
    // Simulate a delay to represent an asynchronous operation
    setTimeout(async () => {
        const feedingTime = db.data.feedingTimes.find(
            (ft) => ft.id === feedingTimeId
        );
        if (!feedingTime) {
            console.error(`Feeding time with ID ${feedingTimeId} not found`);
            return;
        }

        const animal = db.data.animals.find(
            (a) => a.id === feedingTime.animalId
        );
        if (!animal) {
            console.error(`Animal with ID ${feedingTime.animalId} not found`);
            return;
        }

        console.log(
            `Sending notification to feeder for feeding time ${feedingTimeId}`
        );
        console.log(
            `Animal: ${animal.name} - Feeding time: ${feedingTime.time}`
        );
        // Here, you can replace the console.log statements with actual Twilio API calls or other notification methods.

        // Update feeding time status
        feedingTime.status = "notification_sent";
        await db.write();
    }, 3000);
}
