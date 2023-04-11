//破解pikpak
let Premium = $response.body;
var modified = JSON.parse(Premium);
modified.data.status = "ok",
modified.data.expire = "2099-01-01T00:00:00+08:00",
modified.data.type = "platinum";
$done({body:JSON.stringify(modified)});
