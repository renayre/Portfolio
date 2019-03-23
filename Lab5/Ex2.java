/*Renayre Forbes (B00787109) CSCI 2110 Lab 5 
 * Recursive Method to count down and display 
 * Oct 20 2018
 */
import java.util.*;
public class Ex2 {

	public static void countDown(int n) {
		if (n==0) System.out.print("Blast off!"); 
		if (n>0) {
			System.out.print(n+"\t");
			countDown(n-1);
		}
	}
	public static void main(String []args) {
		Scanner kb = new Scanner(System.in);
		System.out.println("Please enter a starting number");
			int i = kb.nextInt();
		countDown(i);
	}
}
