import Message from "@/lib/Message";
import GroupChat from "@/lib/GroupChat";

function readAndConvertFile(file: string) {
    //read this binary, then convert to utf-8 ignore errors
    file = file.replaceAll('~ ', '').replaceAll(' ', ' ');
    let messages_raw: string[] = []
    let unprocessed: string[] = file.split(/(.*?)(\[[0-9]{4}-[0-9]{2}-[0-9]{2}, [0-9]{1,2}:[0-9]{2}:[0-9]{2}.{4})/)
    for (let i = 0; i < unprocessed.length; i++) {
        let message = unprocessed[i];
        if (message !== '') {
            messages_raw.push(message)
        }
    }
    const groupChatName = messages_raw[1].split(':')[0].trim();
    let messages: Message<WhatsappMessage>[] = []
    // for each message
    for (let i = 0; i < messages_raw.length - 1; ) {
        let flags: string[] = []
        if (messages_raw[i] == "") {
            i++;
            continue;
        } else if (messages_raw[i + 1].includes('omitted')) {
            flags.push('omitted');
        }
        let date = parseDateTime(messages_raw[i])
        let author = messages_raw[i + 1].split(':')[0].replaceAll('~', '').trim()
        let text: string = messages_raw[i + 1].split(':')[1].replaceAll('~', '').replaceAll(/<.+>/g, '').trim()
        if (author !== 'Tzevet 2023 & ME 🧬👩‍🔬🌀' && !text.startsWith(author + ' joined') && !text.startsWith(author + ' created group') && !text.endsWith('added ' + author)) {
            messages.push(new Message(date, author, text, flags));
        }
        i += 2
    }

    return new GroupChat(groupChatName, messages);
}

function parseDateTime(dateTimeStr: string): Date {
    // Remove square brackets and split into date and time parts
    const parts = dateTimeStr.replace('[', '').replace(']', '').split(', ');
    const datePart = parts[0];
    let timePart = parts[1];

    // Correctly format the time part to handle AM/PM
    const [time, modifier] = timePart.split(' ');
    let [hours, minutes, seconds]: any[] = time.split(':');

    // Correctly adjust hours for AM/PM
    if (modifier === 'PM' && hours !== '12') {
        hours = parseInt(hours, 10) + 12;
    } else if (modifier === 'AM' && hours === '12') {
        hours = '00';
    }

    hours = hours.toString().padStart(2, '0'); // Ensure hours are two digits

    // Combine into an ISO 8601 format
    const dateTimeISO = `${datePart}T${hours}:${minutes}:${seconds}`;

    // Create and return the Date object
    return new Date(dateTimeISO);
}

const conversationThresholdMinutes = 5;
const smallConversationLength = 20;
const minConvserationLength = 5;

const gc = readAndConvertFile('...');
const msgs = gc.messages;

console.log(findFirstConversation());

function findFirstConversation() {
    return msgs.slice(0, findFirstConversationEnd());
}

function findFirstConversationEnd() {
    if (msgs.length < minConvserationLength) {
        return msgs.length - 1;
    }
    let firstConversation = 5;
    return findEndOfConversation(firstConversation, smallConversationLength);
}

function findEndOfConversation(startIndex: number, maxLength: number): number {
    let at = startIndex + 1;
    while (at < msgs.length && at - startIndex < maxLength) {
        let delta = msgs[at].date.getTime() - msgs[at - 1].date.getTime();
        if (delta > conversationThresholdMinutes * 60 * 1000) return at;
        at++;
    }
    return Math.min(at, msgs.length - 1);
}
