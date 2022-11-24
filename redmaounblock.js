//破解小红帽测试
let obj = JSON.parse($response.body);
obj.data = {
    "is_lounge_vip":true,
    "guest":true,
    "im_role":1
}
$done({body:JSON.stringify(obj)});