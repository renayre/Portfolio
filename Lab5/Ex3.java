
/*Renayre Forbes (B00787109) CSCI 2110 Lab 5 
 * Recursive Method to count down and display (even and odd)
 * Oct 20 2018
 */
import java.util.Scanner;

public class Ex3 {

	public static void countDown(int n) { //not sure if I got the concept right but I think it answer's the question anyways? 
		int temp=n;
		if ((temp>0)) { 
			System.out.print(temp+"\t");
			countDown(temp-2); 
		}
		if (temp<=0) System.out.println("Blast Off!");
	}
	public static void main(String []args) {
		Scanner kb = new Scanner(System.in);
		System.out.println("Please enter a starting number");
			int i = kb.nextInt();
		countDown(i);
	}
	
}
