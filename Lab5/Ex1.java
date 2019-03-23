/*Renayre Forbes (B00787109) CSCI 2110 Lab 5 
 * Factorial, Fibonacci, Powers with Recursive Methods series 
 * Oct 20 2018
 */ 
import java.util.*;
public class Ex1 {
	public static int factorial(int n) {
		int result=0;
		if(n==0) result = 1;
		if(n>0) {
			result= (n*factorial(n-1));
			System.out.println(result);
		}
		return result;
	}
	
	public static int fib(int n) {//finds nth number of the fib series
		int result=0;
		if(n==0) result=0;
		if(n==1) result =1;
		if(n>1) {result = fib(n-1)+fib(n-2);}
		return result;
	}
	
	public static int power(int x, int n) {
		int result=0;
		if (n==0)result=1;
		if(n>0) result =x*power(x,n-1);
		return result;
	}
	
	public static void main(String []args) {
		System.out.println("Factorial (1-10): "); factorial(10);
		System.out.println("Fib series: ");
		for (int i=0;i<=20;i++)//loop prints out 0-20 num in fib series
			System.out.println(fib(i));
		
		//For powers method
		Scanner kb = new Scanner(System.in);
		System.out.println("For Powers(x^n) Enter x and n:");
			int x=kb.nextInt();
			int n=kb.nextInt();
		System.out.println(power(x, n));
	}
}
