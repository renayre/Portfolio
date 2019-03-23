
/*Renayre Forbes (B00787109) CSCI 2110 Lab 5 
 * Recursive Method to display ints vertically by digits 
 * Oct 20 2018
 */

import java.util.*;
public class Ex5 {

	public static void main (String[]args) {
		Scanner kb = new Scanner (System.in);
		System.out.println("Enter a number:");
			int n = kb.nextInt();
		writeVertical(n);
	}
	
	public static void writeVertical(int n) {
		if(n==0) return;
		else {
			writeVertical(n/10);
			System.out.println(n % 10); //gives remainder and saves it in stack... 
		}
	}
}
