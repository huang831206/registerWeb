//data
var all = ["4x50自由式接力", "4x50混和式接力"];
document.title = "第一屆中央泳泳盃報名網站";

//initialize
window.onload=function(){

    //document.getElementById("addRow").innerHTML = "GG";
    var a = document.getElementById("event1");
    setEvent(a);

    document.getElementById("addRow").addEventListener("click", addRow);

    document.getElementById("table").addEventListener("click", function(e){
        if(e.target && e.target.nodeName == "BUTTON"){

            //var c = confirm("確認刪除 " + e.target.parentElement.parentElement.getElementsByClassName("name")[0].value + "?");
            var c = confirm("確認刪除?");

            if(c == true){
                e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
                renderRow();
                //alert("deleted!");
            }

        }
        //console.log("e.target: "+e.target);
        //console.log("e.target.nodeName: "+e.target.nodeName);

    });

    renderRow();


};

function setEvent(target){
    for(var i = 0; i < all.length; i++){
        //target.options.add(new Option(all[i]));
        var o = new Option(all[i]);
        o.value = i+1;
        target.options.add(o);
    }
}

function addRow(){
    //add a new row to the end of table
    document.getElementById("addRow").innerHTML = "新增一個隊伍";

    var tr = document.getElementById("table").insertRow();
    td = tr.insertCell();
    td.innerHTML = '<input name="name1[]" class="name" type="text" placeholder="隊員1" /><br><input name="name2[]" class="name" type="text" placeholder="隊員2" /><br><input name="name3[]" class="name" type="text" placeholder="隊員3" /><br><input name="name4[]" class="name" type="text" placeholder="隊員4" />';
    td = tr.insertCell();
    td.innerHTML = '<input name="std_grade1[]" class="grade" type="text" placeholder="隊員1 系級" /><br><input name="std_grade2[]" class="grade" type="text" placeholder="隊員2 系級" /><br><input name="std_grade3[]" class="grade" type="text" placeholder="隊員3 系級" /><br><input name="std_grade4[]" class="grade" type="text" placeholder="隊員4 系級" />';
    td = tr.insertCell();
    td.innerHTML = '<select name="gender[]" class="gender"><option value="MALE">男子組</option><option value="FEMALE">女子組</option></select>';
    td = tr.insertCell();
    td.innerHTML = '<select name="event1[]" class="event1"><option>選擇項目</option></select>';
    td = tr.insertCell();
    td.innerHTML = '<button class="delete" type="button" >移除</button>';

    var lastAdd = document.getElementsByClassName("event1");
    setEvent(lastAdd[lastAdd.length-1]);

    //console.log("tr:"+document.getElementById("table").getElementsByTagName("tr").length);
    renderRow();

    document.getElementById("table").style.marginLeft = "auto";
}

function renderRow(){
    var table = document.getElementById("table");
    var trs = table.getElementsByTagName("tr");

    trs[0].style.backgroundColor = "#ffdd91";
    for(i = 1; i < trs.length; i++){

        if(i%2 == 1)
            trs[i].style.backgroundColor = "#4267B2";
        else
            trs[i].style.backgroundColor = "#91B6FF";
    }
}

function submit_click(){

    var all = document.getElementById("form1").getElementsByTagName("INPUT");
    for(i = 0; i < all.length; i++){
        if(all[i].value.trim() == ""){
            console.log(all[i].value);
            alert("請確認是否有漏填的資料!");
            return;
        }
        if(all[i].value.trim().match(/[-\\+'"?|<>`?^*]+/g)){
            alert("內容請勿包含特殊字元");
            console.log("invalid char: " + all[i].value);
            return;
        }
    }

    var sel = document.getElementsByClassName("event1");
    for(i = 0; i < sel.length; i++){
        if(sel[i].selectedIndex == 0){
            alert("項目為必填!");
            return;
        }
    }


    //execute php file
    document.getElementById("form1").submit();

}
