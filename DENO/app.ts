const text = 'this is a comment';

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('msg.txt', data).then(() => {
    console.log('written')
})