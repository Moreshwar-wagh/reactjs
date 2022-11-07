const text = [
    `I'm baby listicle snackwave trust fund DSA. Skateboard banjo put a bird on it af chartreuse kickstarter. 3 wolf moon ethical edison bulb bodega boys poutine swag microdosing. Pok pok tote bag taxidermy humblebrag shabby chic raw denim XOXO.`,
    `Hoodie meditation vegan, biodiesel taiyaki you probably haven't heard of them selvage chicharrones activated charcoal fanny pack. Cornhole pitchfork tattooed pork belly, locavore wolf health goth next level umami retro beard la croix typewriter cliche. Chia mixtape ethical DSA, lyft snackwave iceland church-key. Microdosing vegan 3 wolf moon woke intelligentsia, vaporware disrupt fashion axe meggings vibecession hammock brunch sus. Actually you probably haven't heard of them hammock lumbersexual messenger bag.`,
    `Biodiesel trust fund tumeric la croix, wolf church-key unicorn health goth quinoa cliche JOMO vinyl skateboard seitan paleo. Bodega boys listicle pug meditation venmo +1 green juice actually banjo keytar pinterest chicharrones cliche XOXO. Humblebrag live-edge synth, kickstarter la croix XOXO hella hammock. Jean shorts pour-over austin cray chia flannel. Selvage hella hexagon squid art party sartorial keffiyeh DSA try-hard man bun tattooed.`,
    `Artisan tacos health goth pitchfork craft beer, umami farm-to-table bruh big mood freegan chicharrones shoreditch. Seitan YOLO tumblr mukbang lyft retro. Austin vexillologist paleo mixtape tumeric pop-up hell of big mood literally DSA. Retro disrupt kickstarter blue bottle selfies tacos edison bulb, single-origin coffee tumblr pork belly authentic beard. Seitan shoreditch edison bulb paleo gastropub. Glossier knausgaard readymade squid drinking vinegar air plant next level DSA. Craft beer gatekeep shoreditch cray next level hella vibecession.`,
    `Air plant offal farm-to-table, praxis schlitz kale chips jean shorts Brooklyn palo santo hexagon food truck ugh snackwave irony. Yr distillery live-edge selvage +1 polaroid etsy fit ugh affogato narwhal taiyaki jean shorts tumeric. Butcher XOXO glossier salvia. Vinyl kale chips cred artisan prism sriracha.`,
    `I'm baby listicle snackwave trust fund DSA. Skateboard banjo put a bird on it af chartreuse kickstarter. 3 wolf moon ethical edison bulb bodega boys poutine swag microdosing. Pok pok tote bag taxidermy humblebrag shabby chic raw denim XOXO.`,
    `Hoodie meditation vegan, biodiesel taiyaki you probably haven't heard of them selvage chicharrones activated charcoal fanny pack. Cornhole pitchfork tattooed pork belly, locavore wolf health goth next level umami retro beard la croix typewriter cliche. Chia mixtape ethical DSA, lyft snackwave iceland church-key. Microdosing vegan 3 wolf moon woke intelligentsia, vaporware disrupt fashion axe meggings vibecession hammock brunch sus. Actually you probably haven't heard of them hammock lumbersexual messenger bag.`,
    `Biodiesel trust fund tumeric la croix, wolf church-key unicorn health goth quinoa cliche JOMO vinyl skateboard seitan paleo. Bodega boys listicle pug meditation venmo +1 green juice actually banjo keytar pinterest chicharrones cliche XOXO. Humblebrag live-edge synth, kickstarter la croix XOXO hella hammock. Jean shorts pour-over austin cray chia flannel. Selvage hella hexagon squid art party sartorial keffiyeh DSA try-hard man bun tattooed.`,
    `Artisan tacos health goth pitchfork craft beer, umami farm-to-table bruh big mood freegan chicharrones shoreditch. Seitan YOLO tumblr mukbang lyft retro. Austin vexillologist paleo mixtape tumeric pop-up hell of big mood literally DSA. Retro disrupt kickstarter blue bottle selfies tacos edison bulb, single-origin coffee tumblr pork belly authentic beard. Seitan shoreditch edison bulb paleo gastropub. Glossier knausgaard readymade squid drinking vinegar air plant next level DSA. Craft beer gatekeep shoreditch cray next level hella vibecession.`,
    `Air plant offal farm-to-table, praxis schlitz kale chips jean shorts Brooklyn palo santo hexagon food truck ugh snackwave irony. Yr distillery live-edge selvage +1 polaroid etsy fit ugh affogato narwhal taiyaki jean shorts tumeric. Butcher XOXO glossier salvia. Vinyl kale chips cred artisan prism sriracha.`
]


const form = document.querySelector(".lorem-form")
const numofpara = document.getElementById("numofpara")
const numofparaRange = document.getElementById("numofparaRange")
const result = document.querySelector(".lorem-text")

function syncParaNumbers(e) {
    const value = e.target.value
    numofpara.value = value
    numofparaRange.value = value
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const value = parseInt(numofpara.value)
    let tempText = text.slice(0, value)
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("")
    result.innerHTML = tempText
})
numofpara.addEventListener('input', syncParaNumbers)
numofparaRange.addEventListener('input', syncParaNumbers)