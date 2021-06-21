const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

list_items.forEach(item => {

    item.addEventListener("dragstart", () => {
        console.log('dragstart');
        draggedItem = item;
       setTimeout(() => {
        item.style.display = 'none';
       }, 0);
    });

    item.addEventListener("dragend", () => {
        console.log('dragend');
        setTimeout(() => {
            item.style.display = 'block';
        }, 0);
    });

    lists.forEach(list => {

        list.addEventListener('dragover', (e) => {
            e.preventDefault();
            console.log("dropover")
        });

        list.addEventListener("dragenter", (e) => {
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            console.log("dropenter");
        });

        list.addEventListener("dragleave", () => {
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            console.log("dropleave");
        });

        list.addEventListener("drop", (e) => {
            list.append(draggedItem);
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            console.log("drop");
        });
        
    });
});
