function toggleMenu(clickedItem, id) {

    const allMenus = document.querySelectorAll('.submenu');
    const allItems = document.querySelectorAll('.menu-item');

    const currentMenu = document.getElementById(id);

    // 🔥 If already open → close it
    if (currentMenu.style.maxHeight) {
        currentMenu.style.maxHeight = null;
        clickedItem.classList.remove("active");
        return;
    }

    // 🔥 Close all menus + remove active
    allMenus.forEach(menu => menu.style.maxHeight = null);
    allItems.forEach(item => item.classList.remove("active"));

    // 🔥 Open clicked menu
    currentMenu.style.maxHeight = currentMenu.scrollHeight + "px";

    // 🔥 Highlight active
    clickedItem.classList.add("active");
}
function loadprofile(section) {
    const profileDiv = document.getElementById("profile");

    if (section === "student") {
        profileDiv.innerHTML = `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   
    <style>
        *{
    margin: 0;
    padding: 0;
     box-sizing: border-box;
}
body{
    font-family:" Helvetica Neue", Helvetica, Arial, sans-serif;
     background-color: #f7f7f7;
}
table{
    border-spacing: 2px;
    width: 1200px;
    border: #000 solid 1px;
    border-radius: 5px;
    margin-left: 25px;
    margin-top: 15px;
}
tbody {
 
    border-collapse: collapse;
}
table tbody tr td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    font-size: 15px;
}
table tbody tr th{
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    font-size: 15px;
    color: #0909e8;
    text-align: left;
}
td{
    display: table-cell;
    vertical-align: inherit;
    unicode-bidi: isolate;
}
th, td {
  
    border-right: 1px solid #ddd;
}


#s1{
    background-color: #fff;
     border-top: 1px solid #fff;
     border-left: none;
     border-right: none;
}
button{
    margin-left: 25px;
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #2fadd4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
h1{
    color: #0909e8;
    margin-left: 25px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 60;
}
    </style>
</head>
<body>
    <h1>STUDENT WISE SUBJECTS</h1>
    <table>
       <tr id="s1"> <th>Subject</th> <th>code </th> <th width="40%">Description</th><th width="15%">credit</th><th  width="15%">group</th></tr>
       <tr><td width="15%">2</td><td width="15%">CSE102</td><td  width="40%">Data structures</td><td width="15%">4</td><td width="15%"></td></tr>
       <tr id="s1"><td width="15%">2</td><td width="15%">FIC 117</td><td width="40%">LINEAR ALGEBRA AND DIFFERENTIAL EQUATIONS</td><td width="15%">3</td><td width="15%"></td></tr>
         <tr><td width="15%">2</td><td width="15%">FIC 120</td><td width="40%">FOUNDATIONS OF ELECTRICAL AND ELECTRONICS ENGINEERING</td><td width="15%">3</td><td width="15%"></td></tr>
         <tr id="s1"><td width="15%">2</td><td width="15%">SEC171</td><td width="40%">INDUSTRY CODING FOR </td><td width="15%">2</td><td width="15%"></td></tr>
         <tr><td width="15%">2</td><td width="15%">AEC107</td><td width="40%">EFFECTIVE WRIRING AND PRESENTATION SKILLS </td><td width="15%">2</td ><td width="15%" ></td ></tr >
         <tr id="s1"><td width="15%">2</td><td width="15%">FIC125</td><td width="40%">ECONOMICS FOR ENGINEERS</td><td width="15%">3</td><td width="15%"></td></tr>
         <tr><td width="15%">2</td><td width="15%">SEC110</td><td width="40%">APTITUDE FOR ENGINEERS 2 </td><td width="15%">2</td><td width="15%"></td></tr>
    </table>
    <button>view earlier semester subjects</button>
</body>
</html>
        `;
    }
}