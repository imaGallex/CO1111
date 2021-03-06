var replyList;
var replyQuestion;
var qCount = 0;
var session;
const appname = "github";
const APIroot = "https://codecyprus.org/th/api/"; // "test-api" or "api"

const commands = {
    LIST: "list",
    START: "start",
    QUESTION: "question",
    ANSWER: "answer",
    LOCATION: "location",
    SKIP: "skip",
    SCORE: "score",
    LEADERBOARD: "leaderboard",

}

async function ListTreasures()
{
    let response = await fetch(APIroot + commands.LIST);

    if (!response.ok)
    {
        alert("HTTP-Error: " + response.status);
        return 0;
    }

    replyList = await response.json();

    document.getElementById("TH1").innerText = replyList.treasureHunts[0].name;
    document.getElementById("TH2").innerText = replyList.treasureHunts[1].name;
}

async function StartTreasure(choice)
{
    let response = await fetch(APIroot + commands.START + "?player="
    + document.getElementById("nickname").value + "&app=" + appname
    + "&treasure-hunt-id=" + replyList.treasureHunts[choice].uuid);

    if (!response.ok)
    {
        alert("HTTP-Error: " + response.status);
        return 0;
    }

    let replyStart = await response.json();

    session = replyStart.session;
}

async function GetQuestion()
{
    let response = await fetch(APIroot + commands.QUESTION + "?session=");

    if (!response.ok)
    {
        alert("HTTP-Error: " + response.status);
        return 0;
    }

    replyQuestion = await response.json();
}

async function Answer()
{
    //
}

ListTreasures();
