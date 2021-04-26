createTracklistAsync();

function getElementByXpath(path)
{
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

async function fetchURL(url)
{
    var response = await fetch(url);
    return await response.text();
}

async function createTracklistAsync()
{
    var mainElement = getElementByXpath("/html/body/div[2]/div/div/div/div");

    var children = mainElement.children;
    for (var iTMP = 0; iTMP < children.length; iTMP++)
    {
        var childElement = children[iTMP];

        var nodeIndex = iTMP + 1;
        var xpathStringBlock = "/html/body/div[2]/div/div/div/div/section[" + nodeIndex + "]/div/div/div/div/div/div[1]/div/h2";
        var tmpElement = getElementByXpath(xpathStringBlock);
        if(tmpElement != null)
        {
            var sesionName = tmpElement.innerText;

            var tracklistText = await fetchURL("https://raw.githubusercontent.com/jordirosa/MakinaLegendsTVTracklists/main/TRACKLISTS.txt");
            var tracklistArray = tracklistText.match(/[^\r\n]+/g);

            if(tracklistArray.includes(sesionName))
            {
                var sesionEncoded = encodeURI(sesionName);
                var fullURL = "https://raw.githubusercontent.com/jordirosa/MakinaLegendsTVTracklists/main/" + sesionEncoded + ".txt";

                var sesion = await fetchURL(fullURL);
                var array = sesion.match(/[^\r\n]+/g);

                var listElement = document.createElement("ol");
                for(var i = 0; i < array.length; i++)
                {
                    var itemElement = document.createElement("il");
                    itemElement.appendChild(document.createTextNode(array[i]));
                    listElement.appendChild(itemElement);
                    var breakElement = document.createElement("br");
                    listElement.appendChild(breakElement);
                }

                var buttonElement = document.createElement("button");
                buttonElement.appendChild(document.createTextNode("Tracklist"));
                buttonElement.className = "collapsibleScripted";
                var divElement = document.createElement("div");
                divElement.appendChild(listElement);
                divElement.className = "content";

                var xpathParentNode = "/html/body/div[2]/div/div/div/div/section[" + nodeIndex + "]/div/div/div/div/div";
                var tmpParentElement = getElementByXpath(xpathParentNode);
                tmpParentElement.insertBefore(divElement, tmpParentElement.children[2]);
                tmpParentElement.insertBefore(buttonElement, tmpParentElement.children[2]);
            }
        }
    }

    var coll = document.getElementsByClassName("collapsibleScripted");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}
