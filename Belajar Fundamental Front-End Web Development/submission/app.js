
async function foo() {
    const res = await fetch('https://animechan.vercel.app/api/random')

    obj = await res.json();

    console.log(obj)

    document.getElementById("anime").innerHTML = obj.anime;
    document.getElementById("character").innerHTML = obj.character;
    document.getElementById("quote").innerHTML = obj.quote;
}

foo();
