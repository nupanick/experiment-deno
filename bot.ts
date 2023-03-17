const print = console.log;

function main() {
    while (true) {
        const text = prompt('<user>');
        print(text);
        if (text === 'quit') break;
    }
}

if (import.meta.main) main();
