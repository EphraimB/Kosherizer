var saveOptions = document.getElementById("saveOptions");


function save_options()
{
    var shachris = document.getElementById("shachris").value;
    var mincha = document.getElementById("mincha").value;
    var maariv = document.getElementById("maariv").value;

    chrome.storage.sync.set(
    {
        shachrisTime: shachris,
        minchaTime: mincha,
        maarivTime: maariv
    }, function()
       {
           var status = document.getElementById("status");

           status.textContent = "Options saved.";
           setTimeout(function()
                      {
                          status.textContent = "";
                      }, 750);

       });

};

saveOptions.addEventListener("click", save_options);