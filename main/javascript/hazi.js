const elements = document.querySelectorAll('.a4-hazi');

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const h1 = element.querySelector('h1');
    const hiddenDiv = element.querySelector('.rejtett');

    h1.addEventListener('click', (e) => {
        //const content = hiddenDiv.style.display === 'none' ? 'block' : 'none';
        //hiddenDiv.style.display = content;
        hiddenDiv.classList.toggle('rejtett');
    });
}

document.body.style.setProperty("--calc-height", "auto");
const
    calcTargets = document.getElementsByClassName("calcSize"),
    resize = () => {
        for (let target of calcTargets) {
            let size = target.firstElementChild.clientHeight + "px";
            if (target.style.getPropertyValue("--calc-height") !== size) {
                target.style.setProperty("--calc-height", size);
            }
        }
    };
window.addEventListener("resize", resize);
window.addEventListener("load", resize);


