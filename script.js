function toggleMenu(clickedItem, id) {

    const allMenus = document.querySelectorAll('.submenu');
    const allItems = document.querySelectorAll('.menu-item');

    const currentMenu = document.getElementById(id);

    //  If already open → close it
    if (currentMenu.style.maxHeight) {
        currentMenu.style.maxHeight = null;
        clickedItem.classList.remove("active");
        return;
    }

    //  Close all menus + remove active
    allMenus.forEach(menu => menu.style.maxHeight = null);
    allItems.forEach(item => item.classList.remove("active"));

    //  Open clicked menu
    currentMenu.style.maxHeight = currentMenu.scrollHeight + "px";

    //  Highlight active
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
    else if (section === "timetable") {
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
    margin-left: 15px;
    margin-top: 10px;
}
tbody {
 
    border-collapse: collapse;
}
.table tbody tr td {
    padding: 5px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    font-size: 12px;
    color: #101a80;
    font-weight: bold;
    text-align: center;
}
.table tbody tr th{
    padding: 7px;
    line-height: 1.42857143;
    vertical-align: top;
    
    font-size: 15px;
   color: white;
   font-size: 10px;
   background-color: #2a3f54;
}
.data tbody tr td {
    padding: 5px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    font-size: 10px;
    color: #101a80;
    font-weight: bold;
    font-size: 14px;
}
.data tbody tr th{
    padding: 5px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    font-size: 11px;
   color: white;
   border-radius: 7px;
   background-color: #2a3f54;
}
td{
    display: table-cell;
    vertical-align: inherit;
    unicode-bidi: isolate;
}
th, td {
  
    border-right: 1px solid #ddd;
}
h1{
    color: #0909e8;
    margin-left: 15px;
   
    font-size: 18px;
    font-weight: 60;
}
.table td{
  background: linear-gradient(to bottom, white, #ccf1fa);
}
 .table #mid{
    background-color: white;
}
    </style>
</head>
<body>
        <h1> TIME TABLE</h1>
        <table class="table">
            <tr id="mid" style="background-color: white;"><td width="8%"></td><td width="11.5%">1</td><td  width="11.5%">2</td><td  width="11.5%">3</td><td  width="11.5%">4</td><td  width="11.5%">5</td><td  width="11.5%">6</td><td  width="11.5%">7</td><td  width="11.5%">8</td></tr>
            <tr><th width="8%"></th><th  width="11.5%">9:00 to 9:50</th><th  width="11.5%">10:00 to 10:50</th><th  width="11.5%">11:00 to 11:50</th><th  width="11.5%">12:00 to 12:50</th><th  width="11.5%">01:00 to 01:50</th><th  width="11.5%">02:00 to 02:50</th><th  width="11.5%">03:00 to 03:50</th><th  width="11.5%">04:00 to 05:30</th></tr>
            <tr><th width="8%">MONDAY</th><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%">VAC 102(apj)</td><td  width="11.5%">VAC 102(apj)</td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%">SEC 171(V209)</td><td  width="11.5%">SEC 171(V209)</td></tr>
            <tr><th width="8%">TUESDAY</th><td  width="11.5%">SEC 171(V209)</td><td  width="11.5%">SEC 171(V209)</td><td  width="11.5%">SEC 170(V209)</td><td  width="11.5%">SEC 170(V209)</td><td  width="11.5%"></td><td  width="11.5%">FIC 120(X201)</td><td  width="11.5%">FIC 120(X201)</td><td  width="11.5%"></td></tr>
            <tr><th width="8%">WEDNESDAY</th><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%">CSE 102(V209)</td><td  width="11.5%">CSE 102(V209)</td><td  width="11.5%">SEC 170(V209)</td><td  width="11.5%"></td></tr>
            <tr><th width="8%">THURSDAY</th><td  width="11.5%">FIC 125(V209)</td><td  width="11.5%">FIC 125(V209)</td><td  width="11.5%">FIC 117(V209)</td><td  width="11.5%">FIC 117(V209)</td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td></tr>
            <tr><th width="8%">FRIDAY</th><td  width="11.5%">AEC 107(S313)</td><td  width="11.5%">AEC 107(S313)</td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%">FIC 117(V209)</td><td  width="11.5%">CSE 102(V209)</td><td  width="11.5%">FIC 125(V209)</td><td  width="11.5%">FIC 120(V209)</td></tr>
            <tr><th width="8%">SATURDAY</th><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td><td  width="11.5%"></td></tr>
        </table>
    <table class="data">
       <tr id="s1"> <th colspan="2">Subjects Description</th> <th>L-T-P-C </th> <th>Faculty Name </th><th>classroom name</th></tr>
       <tr><td width="7%">AEC107</td><td width="40%">EFFECTIVE WRITING AND PRSENTATION SKILLS</td><td width="7%">1-1-0-2</td><td width="35%">dr thahir jamal k</td><td>S313</td></tr>
       <tr><td width="7%">CSE102</td><td  width="40%">DATA STRUCTURES</td><td width="7%">3-0-1-4</td><td width="35%" >Naresh babu Kakarla</td><td>V209</td></tr>
       <tr><td width="7%">FIC117</td><td  width="40%">LINEAR ALGEBRA AND DIFFERENTIAL EQUATIONS</td><td width="7%">3-0-0-3</td><td width="35%">Anumol Joseph</td><td>V209</td></tr>
       <tr><td width="7%">FIC120</td><td  width="40%">FOUNDATION OF ELECTRONICS AND ELECTRICAL ENGINEERING</td><td width="7%">2-0-1-3</td><td width="35%">ARKAVATTA JOY</td><td>V209</td></tr>
        <tr><td width="7%">FIC125</td><td  width="40%">ECONOMICS FOR ENGINEERS</td><td width="7%">1-1-0-2</td><td width="35%">Gandham Thiloth Rao</td><td>V209</td></tr>
         <tr><td width="7%">SEC110</td><td  width="40%">APTITUDE FOR ENGINEERS 2 </td><td width="7%">1-1-0-2</td><td width="35%">Shiva Bapatla</td><td>S313</td></tr>
          <tr><td width="7%">SEC171</td><td  width="40%">INDUSTRY CODING FOR</td><td width="7%">1-1-0-2</td><td width="35%">Arjun Doe</td><td>S313</td></tr>
    </table>
</body>
</html>
        `;
    }
}

// ==========================================
// MOBILE SIDEBAR TOGGLE
// ==========================================

const menuToggle = document.getElementById("menuToggle");

let sidebarState = 0;

if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        const nav = document.getElementById("nav");
        const side = document.getElementById("side");

        // ==================================
        // STATE 1: FULL SIDEBAR → ICONS ONLY
        // ==================================

        if (sidebarState === 0) {

            nav.classList.add("collapsed");
            nav.classList.remove("hidden");

            side.classList.add("collapsed");

            sidebarState = 1;
        }

        // ==================================
        // STATE 2: ICONS → COMPLETELY HIDDEN
        // ==================================

        else if (sidebarState === 1) {

            nav.classList.remove("collapsed");
            nav.classList.add("hidden");

            side.classList.add("collapsed");

            sidebarState = 2;
        }

        // ==================================
        // STATE 3: HIDDEN → FULL SIDEBAR
        // ==================================

        else {

            nav.classList.remove("hidden");
            nav.classList.remove("collapsed");

            side.classList.remove("collapsed");

            sidebarState = 0;
        }

    });

}