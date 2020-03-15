package ee.ttu.iti0202.hello;

public class Calculator {

    public static String convertName(String s) {
        if (s.length() > 3) {
            return s.substring(3).toUpperCase() + "-" + s.length() + s.substring(Math.max(s.length() - 2, 0));
        } else {
            return "ERROR";
        }
    }

    public static String addition(int a, int b) {
        int c = a + b;
        return String.format("%d + %d = %d", a, b, c);
    }

    public static String substraction(int a, int b){
        int c = a - b;
        return String.format("%d - %d = %d", a, b, c);
    }

    public static String repeat(String s, int n) {
        return new String(new char[n]).replace("\0", s);

    }

    public static String line(int width) {
        String s = "-";
        return repeat(s, width);
    }

    public static String line(int width, boolean decorated) {
        String string = repeat("-", width - 2);
        if (decorated){
            return String.format(">%s<", string);
        } else if (decorated && width == 1){
            return "";
        } else {
            return string;
        }

    }

    public static void main(String[] args) {
        Calculator fck = new Calculator();
        fck.convertName("");
        fck.addition(2, 4);
        fck.substraction(2, 4);
        fck.repeat("-", 5);
        fck.line(6);
        fck.line(6, true);
        System.out.println(fck.line(6, true));
    }

}