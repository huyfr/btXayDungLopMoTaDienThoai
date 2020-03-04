let Mobile=function (cell)
{
    this.cell=cell;
    this.getCell=function ()
    {
        return this.cell;
    };
    this.setCell=function(presentCell)
    {
        this.cell=presentCell;
    };

    this.status=true;
    this.getStatus=function ()
    {
        return this.status;
    };
    this.setStatus=function (presentStatus)
    {
        this.status=presentStatus;
    };

    this.inbox=[];
    this.addInbox=function (content)
    {
        this.inbox.push(content);
        this.setCell(this.getCell()-1);
    };

    this.startChat="";
    this.sent=[];
    this.sendChat=function (people, content)
    {
        if (this.getStatus()===true)
        {
            this.startChat=content;
            this.sent.push(content);
            people.addInbox(content);
            this.setCell(this.getCell()-1);
        }
    };

    this.displayInbox=function ()
    {
        if (this.getStatus()===true)
        {
            this.setCell(this.getCell()-1);
            let display="";
            for (let i=0; i<this.inbox.length; i++)
            {
                display=display+this.inbox[i]+"\n";
            }
            if (display==="")
            {
                return "No message!";
            }
            return display;
        }
    };

    this.displaySent=function ()
    {
        if (this.getStatus()===true)
        {
            this.setCell(this.getCell()-1);
            let display="";
            for (let i=0; i<this.sent.length; i++)
            {
                display=display+this.sent[i]+"\n";
            }
            if (display==="")
            {
                return  "No message!";
            }
            return display;
        }
    };
};

let nokia=new Mobile(100);
let iphone=new Mobile(100);

function turnOn(type)
{
    if (type===1)
    {
        nokia.setStatus(true);
        console.log(nokia);
    }
    if (type===2)
    {
        iphone.setStatus(true);
        console.log(iphone);
    }
}
function turnOff(type)
{
    if (type===1)
    {
        nokia.setStatus(false);
        console.log(nokia);
    }
    if (type===2)
    {
        iphone.setStatus(false);
        console.log(iphone);
    }
}
function sendChat(type)
{
    if (type===1)
    {
        let chat=document.getElementById("composeFirst").value;
        nokia.sendChat(iphone,chat);
        if (nokia.getStatus()===true)
        {
            alert("Send a successful message.");
        }
        console.log(nokia.getCell());
    }
    if (type===2)
    {
        let chat=document.getElementById("composeSecond").value;
        iphone.sendChat(nokia,chat);
        if (iphone.getStatus()===true)
        {
            alert("Send a successful message.");
        }
        console.log(iphone.getCell());
    }
}
function displayInbox(type)
{
    let displayNokia;
    let displayIphone;
    if (type===1)
    {
        displayNokia=nokia.displayInbox();
        document.getElementById("inboxFirst").value=displayNokia;
        console.log(nokia.getCell());
    }
    if (type===2)
    {
        displayIphone=iphone.displayInbox();
        document.getElementById("inboxSecond").value=displayIphone;
        console.log(iphone.getCell());
    }
}
function displaySent(type)
{
    let displayNokia;
    let displayIphone;
    if (type===1)
    {
        displayNokia=nokia.displaySent();
        document.getElementById("sentFirst").value=displayNokia;
        console.log(nokia.getCell());
    }
    if (type===2)
    {
        displayIphone=iphone.displaySent();
        document.getElementById("sentSecond").value=displayIphone;
        console.log(iphone.getCell());
    }
}
function charge(type)
{
    if (type===1)
    {
        while (nokia.getCell()<100)
        {
            nokia.setCell(nokia.getCell()+1);
        }
        console.log(nokia.getCell());
    }
    if (type===2)
    {
        while (iphone.getCell()<100)
        {
            iphone.setCell(iphone.getCell()+1);
        }
        console.log(iphone.getCell());
    }
}