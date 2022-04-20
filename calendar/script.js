

function loadcalendar() {
    const dt = new Date();

    const day = dt.getDate();
    const month = dt.getMonth() + 1;
    const year = dt.getFullYear();

    console.log(dt);
}

loadcalendar();