/*Renayre Forbes (B00787109) CSCI 2110 A4
 * Heap Class
 * Nov 25 2018
 */


import java.util.ArrayList;

public class Heap<T extends Comparable<T>>{
	ArrayList<Process> heapList;
	
	public Heap(){heapList = new ArrayList<Process>();}
	
	public int size(){return heapList.size();}
	
	public boolean isEmpty(){return heapList.isEmpty();}
	
	public void clear(){heapList.clear();}
	
	public void enumerate(){System.out.println(heapList);}
	
	public void add(Process item){
		heapList.add(item);
		
		int index = heapList.size()-1;
		int pindex = (index-1)/2;
		Process parent = heapList.get(pindex);
		
		while (index>0 && item.getPriority() > parent.getPriority()){
			heapList.set(index, parent);
			heapList.set(pindex, item);
			index = pindex;
			pindex = (index-1)/2;
			parent = heapList.get(pindex);
		}
	}
	
	public Process deleteMax(){
		if (isEmpty()){
			System.out.println("Heap is empty");
			return null;
		}
		
		else{
			Process ret = heapList.get(0);	//get the item in the root. This is the largest item.
			
			Process item = heapList.remove(heapList.size()-1);	//remove the last item.
			
			if (heapList.size()==0)
				return ret;						//if there was only one item in the heap to begin with, we are done.
				
			heapList.set(0, item);			//otherwise, proceed. Put the item in the root.
			int index, lIndex, rIndex, maxIndex;
			Process maxChild;
			boolean found=false;
			index = 0;
			lIndex = index*2+1;
			rIndex = index*2+2;
			
			while (!found){
				if (lIndex<size()&&rIndex<size()) {	//case 1: item to be sifted down has two children
				
					//find the maxChild and maxIndex
					if (heapList.get(lIndex).getPriority() > (heapList.get(rIndex).getPriority())){
						maxChild = heapList.get(lIndex);
						maxIndex = lIndex;
					}
					else{
						maxChild = heapList.get(rIndex);
						maxIndex = rIndex;
					}
					
					//sift down if necesssary
					if (item.getPriority()<(maxChild.getPriority()))
					{
						heapList.set(maxIndex, item);
						heapList.set(index, maxChild);
						index = maxIndex;
					}
					else
						found = true;
				}
						
				else if (lIndex < size()) //case 2: item to be sifted down has only left child
				//note: item to be sifted down cannot have only right child - it will violate the complete binary tree property
				{
					if (item.getPriority()<(heapList.get(lIndex).getPriority())){
						heapList.set(index, heapList.get(lIndex));
						heapList.set(lIndex,item);
						
						index = lIndex;
					}
				
					else
						found = true;
				}
				else //case 3: item to be sifted down has no children
					found = true;
						
				lIndex = index*2+1;
				rIndex = index*2+2;
			}
			return ret;
		}

	}			

	public void display() { //my display method :) 
		for(int i=0; i<heapList.size();i++) {
			System.out.print(heapList.get(i).toString()+"   ");
		}
	}
	
}