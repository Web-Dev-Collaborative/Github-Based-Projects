// Menu: Main
// Description: Script Kit
// Shortcut: cmd ;
//Note: Feel free to edit this file!
onTab("Run", async () => {
    await cli("run");
});
onTab("Edit", async () => {
    await main("edit");
});
onTab("New", async () => {
    await main("new");
});
onTab("Share", async () => {
    await main("share");
});
onTab("Help", async () => {
    await main("help");
});
let join = db("kit").get("join").value();
if (join !== "false") {
    onTab("Join", async () => {
        await cli("join");
    });
}
export {};
