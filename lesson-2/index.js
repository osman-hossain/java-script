// write a javaScript programme that print vowel or consonent
var alphabet = prompt("Enter alphabet : ");

alphabet = alphabet.toLowerCase();

if(alphabet=='a' || alphabet=='e'|| alphabet=='i'|| alphabet=='o'|| alphabet=='u')
    {
        console.log("vowel");
        document.write("vowel");
    }

    else
    {
        console.log("consonent");
        document.write("consonent");
    }