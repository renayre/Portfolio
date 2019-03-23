
/*Renayre Forbes (B00787109) CSCI 2110 Lab 5 
 * Recursive Method of Hanoi Tower, keeps track of time
 * Oct 20 2018
 */
import java.util.*;
public class Ex7 {

	public static void main (String [] args) {
		long startTime, endTime, executionTime;
		startTime = System.currentTimeMillis();
		
		Scanner kb = new Scanner (System.in);
		System.out.println("Enter the amount of discs:");
			int n = kb.nextInt();
		Hanoi(n,1,3,2);
		
		endTime = System.currentTimeMillis();
		executionTime = (endTime-startTime);
		System.out.println("Time: "+ executionTime);
	}
	
	public static void Hanoi(int n, int start, int end, int temp) {
		if (n>0) {
			Hanoi(n-1, start, temp, end);
			Hanoi(n-1,temp,end,start);
		}
	}
}
