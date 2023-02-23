const container = document.querySelector(".container")
const colorPicker = document.querySelector("#color-picker")
const select = document.querySelector("#select")
const selectAmount = document.querySelector("#select-amount")

document.querySelector("#generate-btn").addEventListener("click", function() {
    container.innerHTML = ``
    let colorValue = colorPicker.value.slice(1,7)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${select.value.toLowerCase()}&count=${selectAmount.value}`)
        .then(res => res.json())
        .then(data => {
            let colorsArr = data.colors
            for(let item of colorsArr) {
                container.innerHTML += `
                <div class="color-div" style="background:${item.rgb.value}">
                    <p class="color-text">${item.rgb.value}</p>
                </div>
                `
            }
        })
})







