export default class Utils {
    static getTimeSlots(interval: number): string[] {
        const intervalInHours = interval / 60;
        const slots = [];
        for (let i = 0; i < 24; i += intervalInHours) {
            let time = Math.floor(i) < 10 ? '0' + Math.floor(i) : Math.floor(i);
            time += ':' + ((i % 1) * 60 < 10 ? '0' + (i % 1) * 60 : (i % 1) * 60);
            const timeString12hr = new Date('1970-01-01T' + time + 'Z')
                                   .toLocaleTimeString('en-US', {timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric'});
            slots.push(timeString12hr);
        }
        return slots;
    }

    static minuteIntervals(start: number, end: number, interval: number): number[] {
        const intervals = [];
        for (let i = start; i <= end; i += interval) {
            intervals.push(i);
        }
        return intervals;
    }

    static getTimeInSeconds(time: string) {
        const pm = time.split(' ')[1].toLowerCase() === 'pm' ? true : false;
        let timeInSeconds = 0;
        if (!pm) {
            const hours = Number(time.split(' ')[0].split(':')[0]) % 12;
            const minutes = Number(time.split(' ')[0].split(':')[1]);
            timeInSeconds += (hours * 3600) + (minutes * 60);
        } else {
            const hours = (Number(time.split(' ')[0].split(':')[0]) % 12) + 12;
            const minutes = Number(time.split(' ')[0].split(':')[1]);
            timeInSeconds += (hours * 3600) + (minutes * 60);
        }
        return timeInSeconds;
    }
}

