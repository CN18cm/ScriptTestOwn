//破解小红帽测试
let obj = JSON.parse($response.body);
obj.data.is_lounge_vip = true;
obj.data.guest = true;
obj.data.im_role = 1;
$done({body:JSON.stringify(obj)});