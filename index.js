async function fetchData() {
    const url = "https://api.coronavirus.data.gov.uk/v1/data";
    const res = await fetch (url, {
        mode: "cors"
    });

    const record = await res.json();
    console.log(record);

    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("areaName").innerHTML=record.data[0].areaName;
    document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    document.getElementById("allConfirmed").innerHTML=record.data[0].confirmed;
    document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
    document.getElementById("allDeath").innerHTML=record.data[0].death;
}
fetchData();