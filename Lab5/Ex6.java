
/*Renayre Forbes (B00787109) CSCI 2110 Lab 5 
 * Recursive Method to find the sum of squares
 * Oct 20 2018
 */
import java.util.*;
public class Ex6 {

	public static void main (String []args) {
		Scanner kb = new Scanner (System.in);
		System.out.println("Enter a number:");
			int n = kb.nextInt();
		System.out.println(squares(n));
	}
	
	public static int squares(int n) {
		if (n==0) return 0;
		else 
			return (n*n)+squares(n-1);
	}
}
