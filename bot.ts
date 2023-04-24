type Quit = { type: 'quit' };
type Say = { type: 'say', text: string };
type Action = Quit | Say;

type Message = { type: 'message', text: string };
type Event = Message;

type Bot = (e: Event) => Action[];

const pingBot: Bot = (event) => {
    if (event.type === 'message') {
        if (event.text === 'exit') return [{ type: 'quit' }];
        if (event.text === 'quit') return [{ type: 'quit' }];
        if (event.text === 'ping') return [{ type: 'say', text: 'pong' }];
        return [{ type: 'say', text: event.text }];
    }
    return [];
}

const runConsole = (bot: Bot) => {
    const actions: Action[] = [];
    while (true) {
        const a = actions.pop();
        if (!a) {
            const text = prompt('<user>') || '';
            const event: Event = { type: 'message', text };
            actions.unshift(...bot(event));
            continue;
        }
        if (a.type === 'quit') break;
        if (a.type === 'say') console.log(`<bot> ${a.text}`);
    }
}

if (import.meta.main) {
    runConsole(pingBot);
}
