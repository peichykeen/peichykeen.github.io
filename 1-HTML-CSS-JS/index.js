function openNav() {

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("bg").style.backgroundColor = "rgba(0,0,0,0)";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("bg").style.backgroundColor = "#7395AE";
    document.getElementById('hidden').style.display = "block";
    document.getElementById("header").style.color = "#050533";
    document.getElementById("intro").style.color = "#050533";
    document.getElementById("me").style.borderColor = "#050533";
  }
  
  function changeVisibility() {
      document.getElementById('hidden').style.display = "none";
      document.getElementById("header").style.color = "#F2F1E8";
      document.getElementById("intro").style.color = "#F2F1E8";
      document.getElementById("me").style.borderColor = "#F2F1E8";
  } 