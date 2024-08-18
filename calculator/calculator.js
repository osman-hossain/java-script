var sum=0;
var p = document.querySelector("p");
for(var i=1; i<100; i++)
    {

       var number = prompt("Enter a character : ");
        switch(number)
        {
            case '+':
            {
                var plus = prompt();
                sum = sum + plus; 
                document.write(sum);
                p.appendChild(sum);
                
            }
            break;
            case '-':
                {
                    var minus = prompt();
                    sum = sum - minus;
                    document.write(sum);
                }
                break;
                case '*':
                    {
                        var multiply = prompt();
                        sum = sum * multiply;
                        document.write(sum);
                    }
                    break;
                    case '/':
                        {
                            var div = prompt();
                            sum = sum / div;
                            document.write(sum);
                        }
                        default:
                            {
                                console.log("Error. give a character");
                }
                break;
        }
    }