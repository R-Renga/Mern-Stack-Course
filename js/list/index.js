const data = ["shoes","pants","iphones"]

const list = document.getElementById("list")
data.forEach(value => {
    const li = document.createElement("li")

    li.textContent = `${value}`
    list.appendChild(li)
})