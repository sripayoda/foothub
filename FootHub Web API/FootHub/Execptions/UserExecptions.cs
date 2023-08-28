namespace FootHub.Execptions
{
    public class UserExecptions
    {
        public static Dictionary<string, string> ExceptionMessages{ get;} =
            new Dictionary<string, string> { { "SignUp","User Already Exists" },
                {"Login","No User Found yikess.." },{"Delete","Incorrect Credentials"},
                {"Cart", "Already This product is in cart" },
                {"Cart Empty", " Your Cart is Empty" }
            };
    }
}
