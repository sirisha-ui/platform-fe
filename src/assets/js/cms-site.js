window.addEventListener("load", function () {

    // store tabs variable
    var myTabs = document.querySelectorAll(".CMS-filterBtnList >ul >li , .CMS-page-tabs >ul >li, .CMS-filter-tabs >ul >li, .CMS-box-tabs>ul>li");
    function myTabClicks(tabClickEvent) {
        //debugger
        var myTabs1 = tabClickEvent.currentTarget.parentElement.children;
        for (var i = 0; i < myTabs1.length; i++) {
            myTabs1[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var myContentPanes1 = "";
        if (window.location.href.includes('dashboard')){
         myContentPanes1 = tabClickEvent.currentTarget.parentNode.parentElement.parentElement.nextElementSibling.children;
        }
        else {
         myContentPanes1 = tabClickEvent.currentTarget.parentNode.parentElement.nextElementSibling.children;
        }
        /*---------------------------------------------*/
        // var myContentPanes = document.querySelectorAll(".CMS-tab-panel");
        for (i = 0; i < myContentPanes1.length; i++) {
            myContentPanes1[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        document.getElementById(activePaneId).className += ' active';
    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }
});

[].forEach.call(document.querySelectorAll('.CMS-accordion >.CMS-accordion-header'), function (e) {
    e.addEventListener('click', function (e) {
        this.parentElement.classList.toggle('collapsed');
        e.preventDefault();
    }, false);
});

[].forEach.call(document.querySelectorAll('.CMS-dropdown >.CMS-dropdown-btn'), function (e) {
    e.addEventListener('click', function (e) {      

        this.parentElement.classList.toggle('active'); 
        e.preventDefault();

    }, false);          
});
// page tabs
        function openPage(pageName, elmnt, color) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("CMS-page-tabContent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            elmnt.style.backgroundColor = color;
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
 
        
        // LeftsideBar Collapse & Expand Code
    $(document).ready(function () {
        $("#CMS-hamburgerMenu").click(
            function () { 
                $(".CMS-platform .CMS-side-panel ").toggleClass("CMS-sideMenu-collapsed");
                $(this).toggleClass("active");
            }
        )
    });