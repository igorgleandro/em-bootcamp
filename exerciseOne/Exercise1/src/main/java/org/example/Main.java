package org.example;

import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        //Creating the Scanner (input) object

        Scanner scanner = new Scanner(System.in);

        // Constant
        final byte MONTHS_IN_YEARS = 12;
        final byte PERCENTUAL = 100;

        //Users Name quest
        System.out.println("Please insert your name: ");
        String name = scanner.nextLine().trim();

        //Monthly payment to be designed

        double monthlyPayment;

        // Enter the price to be paid
        System.out.print("Insert the total amount: ");
        double paymentTotal = scanner.nextDouble();

        //Enter the Annual Interest Rate
        System.out.print("Insert the Annual Interest Rate: ");
        float interestAnnual = scanner.nextFloat();
        float interestMonthly = interestAnnual/MONTHS_IN_YEARS;
        float interestRate = interestMonthly/PERCENTUAL;

        //Choose a number of instalments
        System.out.print("Insert the number of years for instalments: ");
        int annualPayment = scanner.nextInt();
        int instalments = annualPayment*MONTHS_IN_YEARS;

        monthlyPayment = paymentTotal * (interestRate * Math.pow(1.0 + interestRate, instalments))/(Math.pow(1.0 + interestRate, instalments) - 1.0);

        //applying the correct money format
        String result = NumberFormat.getCurrencyInstance(Locale.ITALY).format(monthlyPayment);

        //printing formatting:
        System.out.println( name + ", your monthly payment should be: "+ result);

    }
}