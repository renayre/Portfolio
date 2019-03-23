/*Renayre Forbes (B00787109) CSCI 2110 A4
 * DEMO Program
 * Nov 25 2018
 */



import java.io.File;
import java.io.IOException;
import java.util.*;

public class Demo {

	public static <T extends Comparable<T>> void main(String[]args)throws IOException {
		Scanner kb = new Scanner(System.in);
		
		System.out.print("Enter the filename to read from: ");
		String filename = kb.nextLine();
	
		Heap<T> heap1 = new Heap<T>();
		int id, timeReqd, priority, timeArrival;
		
		File file = new File(filename);
		Scanner inputFile = new Scanner(file);
		
		while (inputFile.hasNext()){
			id = inputFile.nextInt(); //modified the format of input file to make this easier (everything on their own line) 
			timeReqd = inputFile.nextInt();
			priority = inputFile.nextInt();
			timeArrival = inputFile.nextInt();
			
			heap1.add(new Process(id, timeReqd, priority,timeArrival));
		}
		
		inputFile.close();
		
		//heap1.display();
		heapProcess(heap1);
	}
	
	public static <T extends Comparable<T>> void heapProcess(Heap<T> heap) {
		Heap<T> cpu = new Heap<T>(); 
		int timeUnit = 1;
		do { // loops that does till the heap is empty 
			System.out.println("\n\nTime Unit: "+timeUnit);
			//display heap and cpu before 
			System.out.println("\nBEFORE: ");
			System.out.print("Heap: "); heap.display();
			System.out.println("");
			System.out.print("CPU:"); cpu.display();
			
			//process the process with the highest priority,
			//remove max from heap and add to cpu
			//display heap and cpu during 
			Process curr = heap.deleteMax(); //does this actually delete??
			cpu.add(curr);
			System.out.println("\nDURING: ");
			System.out.print("Heap: "); heap.display();
			System.out.println("");
			System.out.print("CPU:"); cpu.display();

			System.out.println("");//formatting
			
			//subtract timeReqd by 1
			//display heap and cpu after 
			curr.setTimeReqd(curr.getTimeReqd()-1);
			cpu.deleteMax();
			if(curr.getTimeReqd()>0)
				heap.add(curr);
			else 
				System.out.println("Process completed");
			System.out.println("\nAFTER: ");
			System.out.print("Heap: "); heap.display();
			System.out.println("");
			System.out.print("CPU:"); cpu.display();
			
			timeUnit++;
			
		}while(!heap.isEmpty());
	}
	
}
