var elements = document.getElementsByTagName("*");

for(var i = 0; i < elements.length; i++)
{
    var element = elements[i];

    for(var j = 0; j < element.childNodes.length; j++)
    {
        var node = element.childNodes[j];

        if(node.nodeType === 3)
        {
            var text = node.nodeValue;
            var firstReplacedText = text.replace(/what the fuck/gi, "what in the world");
            var secondReplacedText = text.replace(/fuck/gi, "f**k");
            var thirdReplacedText = text.replace(/bitch/gi, "bad person");
            var fourthReplacedText = text.replace(/farted/gi, "passed gas");
            var fifthReplacedText = text.replace(/farts/gi, "passes gas");
            var sixthReplacedText = text.replace(/fart/gi, "pass gas");
            var seventhReplacedText = text.replace(/asshole|shit/gi, "irritating or worthless person");
            var eighthReplacedText = text.replace(/gay|lesbian/gi, "loving another person a lot");
            var ninthReplacedText = text.replace(/in the butt|['s] butt|his butt|in the balls|['s] balls|his balls/gi, "in the private spot");
            var tenthReplacedText = text.replace(/bitches/gi, "bad people");
            var eleventhReplacedText = text.replace(/assholes/gi, "irritating or worthless people");
            var twelthReplacedText = text.replace(/damn!/gi, "argh!");
            //var thirteenthReplacedText = text.replace(/

            if(firstReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(firstReplacedText), node);
            }

            else if(secondReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(secondReplacedText), node);
            }

            else if(thirdReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(thirdReplacedText), node);
            }

            else if(fourthReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(fourthReplacedText), node);
            }

            else if(fifthReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(fifthReplacedText), node);
            }

            else if(sixthReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(sixthReplacedText), node);
            }

            else if(seventhReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(seventhReplacedText), node);
            }

            else if(eighthReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(eighthReplacedText), node);
            }

            else if(ninthReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(ninthReplacedText), node);
            }

            else if(tenthReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(tenthReplacedText), node);
            }

            else if(eleventhReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(eleventhReplacedText), node);
            }

            else if(twelthReplacedText !== text)
            {
                element.replaceChild(document.createTextNode(twelthReplacedText), node);
            }

        }

    }

}