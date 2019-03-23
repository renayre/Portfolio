
/*Renayre Forbes (B00787109) CSCI 2110 Lab 5 
 * Recursive Method to find first m multiples of n
 * Oct 20 2018
 */

import java.util.*;
public class Ex4 {

	public static void mult(int n, int m){
		if (m==0) return;
		else{
			mult(n, m-1);
			System.out.print(n*m+"\t");	
		}
	}
	
	public static void main(String [] args) {
		Scanner kb = new Scanner (System.in);
		System.out.println("Enter n m:");
			int n = kb.nextInt();
			int m = kb.nextInt();
			
		mult(n,m);
	}
}
